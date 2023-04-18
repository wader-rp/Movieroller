import React, { useState } from "react";

export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return { handleMouseOut, handleMouseOver, isHovering };
};
