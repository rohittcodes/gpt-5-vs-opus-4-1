import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h1 className={styles.title}>Discover your next favorite</h1>
            <p className={styles.desc}>Curated products across books, apparel, home, and tech.</p>
            <div className={styles.ctaRow}> 
              <a className={styles.primary} href="#products">Shop now</a>
              <a className={styles.secondary} href="#categories">Browse categories</a>
            </div>
          </div>
          <div className={styles.media}>
            <Image src="/assets/logo-symbol.svg" alt="Brand" width={160} height={160} />
          </div>
        </div>
      </div>
    </section>
  );
}


