import { useEffect, useRef, useState } from "react";

export const useWindowResize = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleWindowresize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleWindowresize();
    window.addEventListener("resize", handleWindowresize);

    return () => {
      window.removeEventListener("resize", handleWindowresize);
    };
  }, []);

  return { screenWidth, setScreenWidth };
};
