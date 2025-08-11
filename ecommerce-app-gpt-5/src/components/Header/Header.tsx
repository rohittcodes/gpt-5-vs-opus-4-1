"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/assets/logo-colored.svg"
              alt="Brand logo"
              width={120}
              height={28}
              priority
            />
          </Link>
          <nav className={styles.nav}>
            <Link href="#">New Arrivals</Link>
            <Link href="#">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Home</Link>
            <Link href="#">Tech</Link>
          </nav>
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">Search</button>
            <button className={styles.iconBtn} aria-label="Cart">Cart (0)</button>
          </div>
        </div>
      </div>
    </header>
  );
}


