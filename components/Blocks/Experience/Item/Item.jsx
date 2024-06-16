"use client";
import React from "react";
import styles from "./Item.module.scss";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
export default function Item({
  position,
  company,
  duration,
  responsibilities,
}) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h3 data-text={position}>{position}</h3>
          </div>
          <span className={`${styles.info}`}>{company}</span>
        </div>
        <div className={styles.right}>
          <TextReveal className={styles.info}>{duration}</TextReveal>
        </div>
      </div>
      <ul className={styles.itemList}>
        {responsibilities.map((responsibility) => (
          <li>
            <TextReveal>
            {responsibility}
            </TextReveal>
            </li>
        ))}
      </ul>
    </div>
  );
}
