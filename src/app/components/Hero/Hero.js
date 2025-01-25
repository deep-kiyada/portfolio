import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Deep Kiyada</h1>
          <h2 className={styles.description}>
            I'm a frontend developer, optimist, and community builder. I work at
            Vercel, where I teach the Next.js community, an open-source web
            framework built with React.
          </h2>
        </div>
      </main>
    </>
  );
}

export default Hero;
