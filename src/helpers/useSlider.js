import { useRef, useState } from "react";

const singleShiftValue = 450;

export const useSlider = () => {
  const [containerShift, setContainerShift] = useState(0);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const handleArrowClick = (direction) => {
    switch (direction) {
      case "left":
        setContainerShift((currentShift) => {
          const newValue = currentShift + singleShiftValue;
          if (newValue >= 0) {
            return 0;
          }

          return currentShift + singleShiftValue;
        });

        break;
      case "right":
        setContainerShift((currentShift) => {
          const newValue = currentShift - singleShiftValue;
          const maxShift =
            -contentRef.current.offsetWidth + containerRef.current.offsetWidth;

          if (newValue < maxShift) {
            return maxShift;
          }

          return currentShift - singleShiftValue;
        });
        break;
      default:
        break;
    }
  };

  return {
    containerRef,
    contentRef,
    containerShift,
    handleArrowClick,
  };
};
