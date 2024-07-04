"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

export default function Page() {
  const [circle, setCircle] = useState(0);

  const random = gsap.utils.random(-500, 500, 100);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".circle", {
      duration: 1,
      x: random,
      y: random,
      ease: "bounce.out",
    })
      .to(
        ".circle",
        {
          duration: 0.5,
          scale: 1.5,
          backgroundColor: "#00FF00",
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".circle",
        {
          duration: 0.5,
          rotation: 360,
          ease: "elastic.out(1, 0.3)",
        },
        "<"
      )
      .to(".circle", {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      })
      .to(".circle", {
        duration: 1,
        opacity: 1,
        ease: "power1.inOut",
      });
  }, [circle]);

  return (
    <>
      <button
        onClick={() => setCircle((prev) => prev + 1)}
        className="mb-5 p-2 bg-blue-500 text-white rounded"
      >
        Animate
      </button>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="circle h-[300px] w-[300px] rounded-full m-5 bg-red-300"></div>
      </div>
    </>
  );
}
