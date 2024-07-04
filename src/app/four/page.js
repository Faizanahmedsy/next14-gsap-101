"use client";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
// import carImage from "../../../public/car.svg"; // Replace with your car image path

const CarGame = () => {
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [speed, setSpeed] = useState(10);
  const carRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newX = position.x;
      let newY = position.y;

      switch (event.key) {
        case "ArrowUp":
          newY = Math.max(position.y - speed, 0);
          break;
        case "ArrowDown":
          newY = Math.min(position.y + speed, window.innerHeight - 50);
          break;
        case "ArrowLeft":
          newX = Math.max(position.x - speed, 0);
          break;
        case "ArrowRight":
          newX = Math.min(position.x + speed, window.innerWidth - 50);
          break;
        default:
          break;
      }

      gsap.to(carRef.current, {
        duration: 0.3,
        x: newX,
        y: newY,
        ease: "power2.out",
      });
      setPosition({ x: newX, y: newY });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [speed, position]);

  return (
    <div
      ref={carRef}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "50px",
        height: "50px",
      }}
    >
      <img src="car.svg" alt="car" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default CarGame;
