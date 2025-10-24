'use client';

import { useEffect, useRef } from 'react';

interface InteractiveMapProps {
  longitude: number;
  latitude: number;
  projectName: string;
  className?: string;
}

const InteractiveMap = ({ longitude, latitude, projectName, className = '' }: InteractiveMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Dynamically import mapbox-gl to avoid SSR issues
    const loadMap = async () => {
      const mapboxgl = (await import('mapbox-gl')).default;
      
      if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
        console.error('Mapbox token not found');
        return;
      }

      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: 15,
        interactive: true,
      });

      // Add marker
      new mapboxgl.Marker({
        color: '#3C4146', // Primary color
        scale: 1.2,
      })
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<div class="p-2"><strong>${projectName}</strong></div>`)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    };

    loadMap();

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [longitude, latitude, projectName]);

  return (
    <div className={`w-full h-64 rounded-lg overflow-hidden ${className}`} ref={mapContainer} />
  );
};

export default InteractiveMap;

