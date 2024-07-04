"use client";
import React, { useState } from "react";
import gsap from "gsap";

const MoveButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const moveButton = () => {
    const button = document.getElementById("moveButton");
    if (button) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const randomX = Math.random() * (vw - button.offsetWidth);
      const randomY = Math.random() * (vh - button.offsetHeight);

      gsap.to(button, {
        x: randomX,
        y: randomY,
        duration: 0.5,
        ease: "power2.out",
      });

      // Increase click count
      setClickCount((prevCount) => prevCount + 1);

      // Check if clickCount is 3
      if (clickCount === 2) {
        // Show popup animation
        showPopupAnimation();
      }
    }
  };

  const showPopupAnimation = () => {
    // Example: Use GSAP to animate popup text
    gsap.fromTo(
      ".popup-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
    );
  };

  return (
    <div className="App">
      <button
        id="moveButton"
        onClick={moveButton}
        className="bg-rose-400 rounded p-4 rounded-lg text-white font-bold"
      >
        Click me to see a surprise!
      </button>
      {clickCount > 3 && (
        <div className="popup-text text-center text-6xl font-bold">
          <p>Hehe, you are too slow!</p>
        </div>
      )}
    </div>
  );
};

export default MoveButton;
