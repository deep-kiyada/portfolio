"use client";
import React from "react";
import styles from "./TechStack.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";

const TechStack = () => {
  return (
    <div className={styles.mainWrapper}>
      <Container fluid>
        <div className={styles.rowWrapper}>
          <div className={styles.techStackHeader}>
            <h6>Tech Stack |</h6>
          </div>
          <ul className={styles.logoList}>
            <li className={styles.logoItem}>
              <Image src={"/images/react.png"} width={35} height={35} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/nextjs.png"} width={35} height={35} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/js.png"} width={35} height={35} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/html-5.png"} width={35} height={35} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/css-3.png"} width={35} height={35} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/tailwind-css.png"} width={35} height={25} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/sass.png"} width={35} height={35} />
            </li>
            <li className={styles.logoItem}>
              <Image src={"/images/webpack.png"} width={35} height={35} />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TechStack;
