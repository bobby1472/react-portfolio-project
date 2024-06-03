import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi it's me</p>
            <h3 className={styles.text_2}>Saranyu Kumsuwan</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}>I'm a</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "SAP B1 Consultant",
                  1000,
                  "SAP B1 Implementor",
                  1000,
                  "SAP B1 Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "SAP B1 Web DI API Developer",
                  1000,
                  "SAP B1 Database Administrator",
                  1000,
                  "SAP B1 Add-ons Developer",
                  1000,
                  "Crystal Report Developer & Designer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              With over 10 years of experience in analyzing problems. Find solution
              to solve <br />
              work processes to be efficient with ERP, MES, ASN, WMS
              systems <br />
              and integration, from planning, analysis, design, installation, testing
              and <br />
              system integration and maintenance (SDLC).
              
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/bobby1472/react-portfolio-project">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/saranyu-kumsuwan-3801a0bb/">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yu.khumsuwan">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
