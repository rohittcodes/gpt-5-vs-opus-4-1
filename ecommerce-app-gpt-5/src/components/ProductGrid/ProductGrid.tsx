"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products as all, type Product } from "@/lib/products";
import styles from "./ProductGrid.module.css";

const TABS: Array<{ key: Product["category"] | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "books", label: "Books" },
  { key: "clothing", label: "Clothing" },
  { key: "interior", label: "Home" },
  { key: "tech", label: "Tech" },
];

export default function ProductGrid() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const products = useMemo(() => (tab === "all" ? all : all.filter(p => p.category === tab)), [tab]);

  return (
    <section id="products" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.title}>Trending products</div>
          <div className={styles.filters}>
            {TABS.map(t => (
              <button
                key={t.key}
                className={styles.filterBtn}
                aria-pressed={tab === t.key}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}


