"use client";

import React, { useRef } from "react";
import styles from "./Stats.module.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getRandomValue } from "@/utils/utils";
import commonConfig from "@/database/config/metadata.json";
import FancyButton from "../../Elements/Button/Button";

export default function Stats({ className }) {
  const container = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const yPercentValue = getRandomValue(20, 10);
      gsap.to(container.current, {
        yPercent: -yPercentValue,
        ease: "Power2.out",
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
        },
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
      tl.from(
        `.statValue`,
        {
          innerText: 0,
          ease: "power1.out",
          snap: {
            innerText: 1,
          },
          duration: 2,
        },
        0
      );
      tl.from(
        `.statValueV2`,
        {
          autoAlpha: 0,
          ease: "power1.out",
          duration: 2,
        },
        0
      );
    },
    { scope: container }
  );

  return (
    <div className={`${styles.stats} ${className}`} ref={container}>
      <div className={styles.stat}>
        <div className={`${styles.statValue}`}>
          <span>About Me</span>
        </div>
        <span className={styles.statDesc}>
          Hey I'm Iman! I'm a highly motivated frontend developer with a strong
          passion for web development.
        </span>
      </div>
      <div className={styles.stat}>
        <div className={`${styles.statValue}`}></div>
        <span className={styles.statDesc}>
          I currently work for Aurora Web Studio as a frontend developer,
          where I tackle extremely difficult engineering problems every day. I
          continuously work towards improving my knowledge and skills so I can
          contribute more to the business.
        </span>
      </div>
      <div className={styles.stat}>
        <div className={`${styles.statValue}`}></div>
        <span className={styles.statDesc}>
          My mission is to continuously advance in web development, using my
          growing expertise to drive societal progress through technology.
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <FancyButton element={"link"} theme={"button-4"} link={`mailto:${commonConfig.personal.email}`}>
          Contact
        </FancyButton>
      </div>
    </div>
  );
}
