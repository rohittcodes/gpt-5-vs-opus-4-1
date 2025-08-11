"use client";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import styles from "./ProductCard.module.css";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const [qty, setQty] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <Image className={styles.thumb} src={product.image} alt={product.name} width={640} height={480} />
      <div className={styles.body}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.priceRow}>
          <div className={styles.price}>${product.price}</div>
          {product.oldPrice ? <div className={styles.oldPrice}>${product.oldPrice}</div> : null}
        </div>
        <div className={styles.cartRow}>
          <div className={styles.qty}>
            <button onClick={() => setQty(v => Math.max(1, v - 1))} aria-label="Decrease quantity">-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(v => v + 1)} aria-label="Increase quantity">+</button>
          </div>
          <button className={styles.btn} onClick={() => setAdded(true)} aria-live="polite">
            {added ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}


