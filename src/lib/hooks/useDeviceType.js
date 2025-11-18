import { useState, useEffect } from "react";

const useDeviceType = () => {
  const getDeviceType = () => {
    const width = window.innerWidth;
    return width < 768 ? "mobile" : width < 1440 ? "tablet" : "desktop";
  };

  const [deviceType, setDeviceType] = useState(
    typeof window !== "undefined" ? getDeviceType() : "desktop"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
