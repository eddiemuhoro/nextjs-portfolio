# Docker Deployment Guide for Next.js Portfolio on Contabo VPS

This guide will help you deploy your Next.js portfolio project on your Contabo VPS using Docker.

## Prerequisites on VPS

### 1. Update your Ubuntu system
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install Docker
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Log out and back in, or run:
newgrp docker
```

### 3. Install Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 4. Install Git (if not already installed)
```bash
sudo apt install git -y
```

## Deployment Steps

### 1. Clone your repository on the VPS
```bash
cd /home/$(whoami)
git clone <your-repository-url> nextjs-portfolio
cd nextjs-portfolio
```

### 2. Configure your domain (Optional)
If you have a domain name, edit the nginx.conf file:
```bash
nano nginx.conf
```
Replace `your-domain.com` with your actual domain name.

### 3. Deploy the application
```bash
# Make the deployment script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

## Configuration Options

### Environment Variables
Create a `.env` file in your project root for any environment variables:
```bash
nano .env
```

Add your variables:
```
NODE_ENV=production
# Add other environment variables as needed
```

### SSL Configuration (Optional)
To enable HTTPS:

1. Obtain SSL certificates (using Let's Encrypt):
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot certonly --standalone -d your-domain.com
```

2. Create SSL directory and copy certificates:
```bash
mkdir -p ssl
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ssl/your-domain.crt
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ssl/your-domain.key
sudo chown $(whoami):$(whoami) ssl/*
```

3. Uncomment the SSL server block in `nginx.conf`

4. Redeploy:
```bash
./deploy.sh
```

## Management Commands

### View application logs
```bash
docker-compose logs -f
```

### Stop the application
```bash
docker-compose down
```

### Restart the application
```bash
docker-compose restart
```

### Update the application
```bash
git pull origin main  # or your main branch
./deploy.sh
```

### View running containers
```bash
docker-compose ps
```

### Clean up Docker resources
```bash
docker system prune -f
```

## Firewall Configuration

Make sure your VPS firewall allows HTTP and HTTPS traffic:

```bash
# Using UFW (Ubuntu Firewall)
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw status
```

## Troubleshooting

### Application not accessible
1. Check if containers are running: `docker-compose ps`
2. Check logs: `docker-compose logs`
3. Verify firewall settings
4. Check if ports are open: `netstat -tulpn | grep :80`

### Build failures
1. Check Docker logs: `docker-compose logs nextjs-portfolio`
2. Ensure sufficient disk space: `df -h`
3. Clear Docker cache: `docker system prune -a`

### Performance optimization
1. Set up log rotation for Docker logs
2. Monitor resource usage: `htop` or `docker stats`
3. Consider using a CDN for static assets

## Monitoring

### Set up log rotation
```bash
sudo nano /etc/docker/daemon.json
```

Add:
```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```

Restart Docker:
```bash
sudo systemctl restart docker
```

## Backup Strategy

### Backup your application data
```bash
# Create backup script
nano backup.sh
```

Content:
```bash
#!/bin/bash
BACKUP_DIR="/home/$(whoami)/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/nextjs-portfolio-$DATE.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  /home/$(whoami)/nextjs-portfolio

# Keep only last 7 backups
find $BACKUP_DIR -name "nextjs-portfolio-*.tar.gz" -mtime +7 -delete
```

Make it executable and run:
```bash
chmod +x backup.sh
./backup.sh
```

## Auto-deployment with GitHub Actions (Optional)

You can set up automatic deployment when you push to your repository. This requires setting up SSH keys and webhooks.

Your Next.js portfolio is now ready for production deployment on your Contabo VPS!
