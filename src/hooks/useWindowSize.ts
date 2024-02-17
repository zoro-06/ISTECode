import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 375, // Default to iPhone 6/7/8 width
    height: typeof window !== "undefined" ? window.innerHeight : 667, // Default to iPhone 6/7/8 height
  });

  function changeWindowSize() {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        requestAnimationFrame(changeWindowSize);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowSize;
}
