import React, { useRef, useEffect } from "react";

const Container = ({
  className,
  children,
  title,
  toolsLength,
  updateRefArr,
}) => {
  const containerRef = useRef(false);
  const { current } = containerRef;
  useEffect(() => {
    if (current) {
      updateRefArr(current);
    }
  }, [current]);
  return (
    <div
      className={`${className} ${toolsLength === 0 && `hidden`}`}
      id={title}
      ref={containerRef}
    >
      {children}
    </div>
  );
};
export default Container;
