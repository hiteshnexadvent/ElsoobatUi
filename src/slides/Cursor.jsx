import React, { useEffect, useRef } from "react";
import "./Slide.css";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursorRef.current.classList.add("hovered");
    const removeHover = () => cursorRef.current.classList.remove("hovered");

    document.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default Cursor;
