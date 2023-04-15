import React, { useState } from "react";

export const useHover = () => {
  const [isHovering, setIsHovering] = useState({ hover: false, index: -1 });
  const handleMouseOver = (index) => {
    setIsHovering({ hover: true, index: index });
  };

  const handleMouseOut = () => {
    setIsHovering({ hover: false, index: -1 });
  };
  return { handleMouseOut, handleMouseOver, isHovering };
};
