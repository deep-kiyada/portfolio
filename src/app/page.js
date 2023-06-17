import styles from "./page.module.css";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import Hero from "./Hero/Hero.js";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar />
      <Hero />
      <Footer />
    </main>
  );
}
