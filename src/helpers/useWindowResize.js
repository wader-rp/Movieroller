import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

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

  return { screenWidth, setScreenWidth, isMobile: screenWidth < 992 };
};
