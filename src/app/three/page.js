"use client";
import React, { useState, useEffect } from "react";

const CarGame = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setPosition((prevPos) => ({ ...prevPos, y: prevPos.y - 10 }));
          break;
        case "ArrowDown":
          setPosition((prevPos) => ({ ...prevPos, y: prevPos.y + 10 }));
          break;
        case "ArrowLeft":
          setPosition((prevPos) => ({ ...prevPos, x: prevPos.x - 10 }));
          break;
        case "ArrowRight":
          setPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 10 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "50px",
        height: "50px",
        backgroundColor: "blue",
      }}
    />
  );
};

export default CarGame;
