import Image from "next/image";
import styles from "./hero.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className={styles.mainWrapper}>
      <div class="container">
        <div className={`${styles.rowWrapper} row`}>
          <div className={`${styles.leftColumn} col-8`}>
            <div className={styles.greetings}>Hi, I'm</div>
            <div className={styles.name}>Deep Kiyada</div>
            <div className={styles.header}>Complete Web Designer</div>
            <hr className={styles.headerHr} />
            <div className={styles.description}>
              Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
              based in Belgrade, Serbia.
            </div>
            <div className={styles.footer}>
              <div>
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </div>
              &nbsp; &nbsp;
              <div>
                <FontAwesomeIcon icon={faTwitter} size="xl" />
              </div>
            </div>
          </div>
          <div className={`${styles.rightColumn} col-4`}>
            <div className={styles.leftColumn}>
              <Image
                className={styles.heroImage}
                src={"/images/Deep_Kiyada.JPG"}
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
