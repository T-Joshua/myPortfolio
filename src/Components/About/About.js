import React from "react";

import "./AboutStyles.css";

import AboutPics from "../../Assets/About-Pic2.png";

function About() {
  return (
    <div id="about">
      <section className="about">
        <div className="main">
          <img src={AboutPics} alt="profile pics" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>
              Developer & <span>Designer</span>
            </h5>
            <p>
              I am a Front-end Web Developer. I can provide clean code and pixel
              perfect design. I also make the website more & more interactive
              with web animations. I can provide clean code and pixel perfect
              design. I also make the website more & more interactive with web
              animations. A responsive design makes your website accesible to
              all users, regardless of their device.
            </p>
            <button type="button">
              <a
                href="http://wa.me/+2349024048231"
                rel="noreferrer"
                target={"_blank"}
              >
                Let's Talk
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
