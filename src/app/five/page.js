"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollAnimations.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const sectionRefs = useRef([]);

  useGSAP(() => {
    // Fade in and slide up animation for each section
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect for background
    gsap.to(".parallax-bg", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="parallax-bg"></div>
      {[1, 2, 3, 4].map((num, index) => (
        <section
          key={num}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="section"
        >
          <h2>Section {num}</h2>
          <p>This is the content for section {num}.</p>
        </section>
      ))}
    </div>
  );
};

export default ScrollAnimations;
