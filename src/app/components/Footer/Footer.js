"use client";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.mainWrapper}>
      <Container fluid>
        <div className={`${styles.footerWrapper} row`}>
          <div className={`${styles.leftColumn} col`}>
            <div className={styles.logo}>Deep Kiyada</div>
            <div className={styles.copyrightText}>© 2023 Deep Kiyada</div>
          </div>
          <div className={`${styles.rightColumn} col`}>
            <div className={styles.socialMediaLinks}>
              <div>Twitter</div>
              <div>Linkedin</div>
              <div>Email</div>
              <div>Medium</div>
            </div>
            <div className={styles.footerMenu}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
