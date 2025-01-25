import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="index.html">
          {/* <img src="logo.png" alt="Website Logo" /> */}
          DEEP
        </a>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a className={styles.navItemLink} href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className={styles.navItemLink} href="about.html">
              About
            </a>
          </li>
          <li>
            <a className={styles.navItemLink} href="services.html">
              Services
            </a>
          </li>
          <li>
            <a className={styles.navItemLink} href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
