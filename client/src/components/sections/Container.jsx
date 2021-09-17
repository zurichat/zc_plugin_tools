import React, { useRef, useEffect } from "react";

const Container = ({ className, children, title, toolsLength }) => {
  const containerRef = useRef(false);
  const { current } = containerRef;
  useEffect(() => {
    if (current) {
      set;
    }
  }, [containerRef]);
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
