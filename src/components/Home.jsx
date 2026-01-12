import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
         <img src="/fa.PNG" alt="Fathi Mohamed" className="profile-image" />
        <h1 className="greeting">Hello, I'm Fathi Mohamed</h1>
        <p>
          I'm a Full-Stack Software Engineer with a passion for building scalable web applications using modern technologies like React, Flask, Node.js, and more.
        </p>
      </div>
    </section>
  );
}

export default Home;
