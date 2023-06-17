import styles from "./page.module.css";
import NavBar from "./NavBar/NavBar.js";
import Hero from "./Hero/Hero.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Hero />
    </main>
  );
}
