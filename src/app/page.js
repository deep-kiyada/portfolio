import styles from "./page.module.css";
import Navbar from "./Navbar/Navbar.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
