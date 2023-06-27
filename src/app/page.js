import styles from "./page.module.css";
import NavigationBar from "./NavigationBar/NavigationBar.js";
import Hero from "./Hero/Hero.js";
import Footer from "./Footer/Footer.js";
import TechStack from "./TechStack/TechStack.js";
import AboutMe from "./AboutMe/AboutMe.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar />
      <Hero />
      <TechStack />
      <AboutMe />
      <Footer />
    </main>
  );
}
