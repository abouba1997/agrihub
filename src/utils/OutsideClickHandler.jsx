import { useEffect, useRef } from "react";

const OutsideClickHandler = ({ children, handler }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mouseup", handleClickOutside, true);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside, true);
    };
  }, [handler]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;
