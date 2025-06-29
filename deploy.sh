#!/bin/bash

# Deployment script for Next.js Portfolio on Contabo VPS
set -e

echo "🚀 Starting deployment of Next.js Portfolio..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="nextjs-portfolio"
DOCKER_IMAGE_NAME="nextjs-portfolio"
CONTAINER_NAME="nextjs-portfolio-app"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop and remove existing containers
print_status "Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Remove old images to free up space
print_status "Removing old Docker images..."
docker image prune -f
docker rmi $(docker images | grep "${DOCKER_IMAGE_NAME}" | awk '{print $3}') 2>/dev/null || true

# Build and start the application
print_status "Building and starting the application..."
docker-compose up --build -d

# Wait for the application to start
print_status "Waiting for application to start..."
sleep 10

# Check if containers are running
if docker-compose ps | grep -q "Up"; then
    print_status "✅ Deployment successful!"
    print_status "Application is running at:"
    print_status "  - http://localhost:3000 (Direct Next.js app)"
    print_status "  - http://localhost (Through Nginx proxy)"
    print_status ""
    print_status "To view logs: docker-compose logs -f"
    print_status "To stop: docker-compose down"
else
    print_error "❌ Deployment failed. Check logs with: docker-compose logs"
    exit 1
fi
