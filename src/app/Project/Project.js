"use client";
import React from "react";
import styles from "./Project.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <Container>
        <div className={styles.projectSectionHeadingTag}>PROJECTS</div>
        <div className={styles.projectSectionHeading}>
          Each project is a unique piece of development 🧩
        </div>
        <div class={styles.projectWrapper}>
          <Image
            src="/images/abtme.webp"
            alt=""
            class={styles.projectThumbnail}
            width={400}
            height={400}
          ></Image>
          <div class={styles.projectName}>
            <h2 class={styles.projectTitle}>Scheduler</h2>
            <p class={styles.projectDescription}>
              The Scheduler is a web application for Students and Faculties to
              schedule their own routine.
            </p>
          </div>
        </div>

        <div class={styles.projectWrapper}>
          <div class={styles.projectName}>
            <h2 class={styles.projectTitle}>Billing Software by TLS</h2>
            <p class={styles.projectDescription}>
              This is the billing software which is made for Gopal Traders by
              The Loop Studio - TLS.
            </p>
          </div>
          <Image
            src="/images/abtme.webp"
            alt=""
            class={styles.projectThumbnail}
            width={400}
            height={400}
          ></Image>
        </div>
      </Container>
    </div>
  );
};

export default Project;
