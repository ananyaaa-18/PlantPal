"use client";
import "./global.css";
import { useEffect } from "react";
import Image from "next/image";
import leafGif from "../public/cute leaf.gif"; 
import { Button } from "../components/ui/button";

export default function HomePage() {
  useEffect(() => {
    const leavesContainer = document.querySelector(".leaves");
    for (let i = 0; i < 10; i++) {
      const leaf = document.createElement("img");
      leaf.src = "/flower1.png"; 
      leaf.classList.add("leaf");
      leaf.style.left = Math.random() * 100 + "vw";
      leaf.style.animationDuration = 8 + Math.random() * 4 + "s";
      leavesContainer.appendChild(leaf);
    }
  }, []);

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="leaves"></div>
      <div className="window-bar">
        <span className="window-icons">✖ ◻ ─</span>
      </div>

      <section className="first">
        <div className="container">
          <h1 className="title">
            <Image src={leafGif} alt="cute gif" className="gif1" />
            PlantPal
            <Image src={leafGif} alt="cute gif" className="gif1" />
          </h1>

          <center>
            <p className="subtitle">Grow your plant as you grow your focus 🌸</p>
          </center>
        </div>

        <button onClick={(redirectToLogin)  => alert("Let’s grow!")} className="btn-start">
          Get Started ♡
        </button>
      </section>
    </div>
  );
}


