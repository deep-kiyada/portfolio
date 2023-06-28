"use client";
import React from "react";
import styles from "./Project.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className={styles.mainWrapper}>
      <Container fluid>
        <div className={styles.header}>Projects 💼</div>
        <div className={`${styles.rowWrapper} row`}>
          <div className={`${styles.leftColumn} col-6`}>
            <div className={styles.projectBox}>
              <div className={styles.projectImageContainer}>
                <Image
                  className={styles.projectImage}
                  src={"/images/abtme.webp"}
                  layout="fill"
                />
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.projectHeader}>Sarva Hardware</div>
                <div className={styles.projectTechStack}>
                  Wordpress, Elementor, Jetpack, WPForms
                </div>
                <div className={styles.projectDescription}>
                  I excel in designing and maintaining responsive websites that
                  offer a smooth user experience. My expertise lies in crafting
                  dynamic, engaging interfaces through writing clea
                </div>
                <div className={styles.links}>
                  <div className={styles.projectVisitLink}>
                    <Link href={"https://sarvahardware.com/"}>Visit</Link>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#147efb" }}
                      />
                    </span>
                  </div>
                  <div className={styles.projectReadMoreLink}>
                    <Link
                      href={
                        "https://www.notion.so/Deep-Kiyada-a7a2ed95fd6a4483a86f677c190a5ae9"
                      }
                    >
                      Read more
                    </Link>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#147efb" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.rightColumn} col-6`}>
            <div className={styles.projectBox}>
              <div className={styles.projectImageContainer}>
                <Image
                  className={styles.projectImage}
                  src={"/images/abtme.webp"}
                  layout="fill"
                />
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.projectHeader}>Sarva Hardware</div>
                <div className={styles.projectTechStack}>
                  Wordpress, Elementor, Jetpack, WPForms
                </div>
                <div className={styles.projectDescription}>
                  I excel in designing and maintaining responsive websites that
                  offer a smooth user experience. My expertise lies in crafting
                  dynamic, engaging interfaces through writing clea
                </div>
                <div className={styles.links}>
                  <div className={styles.projectVisitLink}>
                    <Link href={"https://sarvahardware.com/"}>Visit</Link>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#147efb" }}
                      />
                    </span>
                  </div>
                  <div className={styles.projectReadMoreLink}>
                    <Link
                      href={
                        "https://www.notion.so/Deep-Kiyada-a7a2ed95fd6a4483a86f677c190a5ae9"
                      }
                    >
                      Read more
                    </Link>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#147efb" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
