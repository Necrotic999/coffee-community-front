import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [currentStyle, setCurrentStyle] = useState('streets'); 

  const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY; 
  
  

  const styles = {
    streets: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
    hybrid: `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_KEY}`,
    satellite: `https://api.maptiler.com/maps/satellite/style.json?key=${MAPTILER_KEY}`,
  };

  useEffect(() => {
    if (map.current) return;

    import('maplibre-gl').then((maplibregl) => {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: styles[currentStyle], 
        center: [30.3066141, 50.3367316],
        zoom: 15,
      }); 

      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

      new maplibregl.Marker({ color: '#b80909' })
        .setLngLat([30.3066141, 50.3367316])
        .setPopup(new maplibregl.Popup({ offset: 30 }).setHTML('<strong>Coffee Community</strong>'))
        .addTo(map.current);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      map.current.setStyle(styles[currentStyle]);
    }
  }, [currentStyle]);

  return (
    <div className='flex flex-col-reverse gap-4'>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setCurrentStyle('streets')}
          style={{
            padding: '10px 20px',
            background: currentStyle === 'streets' ? '#b80909' : '#fff',
            color: currentStyle === 'streets' ? '#fff' : '#000',
            border: '2px solid #b80909',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Звичайна карта
        </button>
        <button
          onClick={() => setCurrentStyle('hybrid')}
          style={{
            padding: '10px 20px',
            background: currentStyle === 'hybrid' ? '#b80909' : '#fff',
            color: currentStyle === 'hybrid' ? '#fff' : '#000',
            border: '2px solid #b80909',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Супутник
        </button>
      </div>

      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: '200px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  );
}