import { useEffect, useRef, useState } from "react";
import markerImg from "/src/assets/img/marker.png";

const NaverMap = () => {
  const mapRef = useRef(null);
  const [mapSize] = useState({ width: '100%', height: '400px' });

  useEffect(() => {
    const loadMap = () => {
      if (!window.naver) return;

      const center = new window.naver.maps.LatLng(36.3532996321856, 127.389539811866);

      const map = new window.naver.maps.Map(mapRef.current, {
        center: center,
        zoom: 14,
      });

      new window.naver.maps.Marker({
        position: center,
        map,
        icon: {
          url: markerImg,
          size: new window.naver.maps.Size(29, 42),
          scaledSize: new window.naver.maps.Size(29, 42),
          origin: new window.naver.maps.Point(0, 0),
          anchor: new window.naver.maps.Point(14.5, 42),
        },
      });
    };

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_CLIENT_ID}`;
    script.async = true;
    script.onload = loadMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} style={{ width: mapSize.width, height: mapSize.height }} />;
};

export default NaverMap;
