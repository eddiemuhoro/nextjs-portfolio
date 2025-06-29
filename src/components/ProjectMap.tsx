'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons in production using CDN URLs
// Ensure any cached icon URLs are cleared before merging new options
// This matches the working component's approach
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Project {
  title: string;
  location: string;
  coords: { lat: number; lng: number };
}

const ProjectMap: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [mapKey, setMapKey] = useState(0);

  // Force re-render of map when projects change
  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, [projects]);

  return (
    <div
      style={{
        height: 300,
        width: '100%',
        borderRadius: '0.75rem',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        key={mapKey} // Force new instance on re-render
        center={[-1.270786, 36.834882]} // Central Kenya
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map((p, i) => (
          <Marker key={i} position={[p.coords.lat, p.coords.lng]}>
            <Popup>
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-base-content text-opacity-60">
                {p.location}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ProjectMap;
