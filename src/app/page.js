"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  const boxRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(boxRef.current, {
      duration: 1,
      x: 500,
      ease: "bounce.out",
    })
      .to(boxRef.current, {
        duration: 0.5,
        scale: 1.5,
        backgroundColor: "#00FF00",
        ease: "power1.inOut",
      })
      .to(boxRef.current, {
        duration: 0.5,
        rotation: 360,
        ease: "elastic.out(1, 0.3)",
      })
      .to(boxRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      })
      .to(boxRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div
        ref={boxRef}
        className="w-[300px] h-[300px] bg-red-200 p-5 m-5"
      ></div>
    </main>
  );
}
