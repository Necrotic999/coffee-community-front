import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { clsx } from "clsx";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [currentStyle, setCurrentStyle] = useState("streets");

  const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  const styles = {
    streets: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
    hybrid: `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_KEY}`,
    satellite: `https://api.maptiler.com/maps/satellite/style.json?key=${MAPTILER_KEY}`,
  };

  useEffect(() => {
    if (map.current) return;

    import("maplibre-gl").then((maplibregl) => {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: styles[currentStyle],
        center: [30.3066141, 50.3367316],
        zoom: 15,
      });

      map.current.addControl(new maplibregl.NavigationControl(), "top-right");

      new maplibregl.Marker({ color: "#b80909" })
        .setLngLat([30.3066141, 50.3367316])
        .setPopup(
          new maplibregl.Popup({ offset: 30 }).setHTML(
            "<strong>Coffee Community</strong>"
          )
        )
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
    <div className="flex flex-col-reverse gap-4">
      <div className="flex gap-2.5 mb-5">
        <button
          onClick={() => setCurrentStyle("streets")}
          className={clsx(
            "py-2.5 px-5 border-2 border-[#b80909] rounded-xl cursor-pointer hover:bg-red-600 hover:text-white duration-200",
            { "bg-[#b80909]": currentStyle === "streets" },
            { "text-white": currentStyle === "streets" }
          )}
        >
          Звичайна карта
        </button>
        <button
          onClick={() => setCurrentStyle("hybrid")}
          className={clsx(
            "py-2.5 px-5 border-2 border-[#b80909] rounded-xl cursor-pointer hover:bg-red-600 hover:text-white duration-200",
            { "bg-[#b80909]": currentStyle === "hybrid" },
            { "text-white": currentStyle === "hybrid" }
          )}
        >
          Супутник
        </button>
      </div>

      <div
        ref={mapContainer}
        className="w-full h-[150px] rounded-2xl overflow-hidden min-[768px]:w-[340px] min-[768px]:h-50 min-[1440px]:w-[570px] min-[1440px]:h-60"
      />
    </div>
  );
}
