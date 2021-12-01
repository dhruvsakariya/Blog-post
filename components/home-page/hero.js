import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/max.png"
          alt="an image showing max"
          width={300}
          height={300}
          draggable={false}
          
        />
      </div>
      <h1>Hi, I'm Dhruv</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React-Js and React-Native
      </p>
    </section>
  );
};

export default Hero;
