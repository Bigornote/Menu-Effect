import React from "react";
import Hero from "../assets/hero.jpg";

const home = () => {
  return (
    <section className="home container">
      <div className="block-img">
        <img src={Hero} alt="Legends F1 formula" className="hero-img" />
      </div>

      <h1>Legends</h1>
      <p>Never Forget</p>
    </section>
  );
};

export default home;
