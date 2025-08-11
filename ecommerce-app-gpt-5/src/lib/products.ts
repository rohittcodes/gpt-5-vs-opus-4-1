export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: "books" | "clothing" | "interior" | "tech";
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Hardcover Journal",
    price: 24,
    oldPrice: 32,
    image: "/products/product-1.jpg",
    category: "books",
  },
  {
    id: "p2",
    name: "Paperback Novel",
    price: 18,
    image: "/products/product-2.jpg",
    category: "books",
  },
  {
    id: "p3",
    name: "Crewneck Tee",
    price: 22,
    oldPrice: 28,
    image: "/products/product-3.jpg",
    category: "clothing",
  },
  {
    id: "p4",
    name: "Denim Jacket",
    price: 64,
    image: "/products/product-4.jpg",
    category: "clothing",
  },
  {
    id: "p5",
    name: "Ceramic Vase",
    price: 39,
    image: "/products/product-5.jpg",
    category: "interior",
  },
  {
    id: "p6",
    name: "Table Lamp",
    price: 55,
    image: "/products/product-6.jpg",
    category: "interior",
  },
  {
    id: "p7",
    name: "Wireless Headphones",
    price: 129,
    oldPrice: 159,
    image: "/products/product-7.jpg",
    category: "tech",
  },
  {
    id: "p8",
    name: "Smartwatch",
    price: 199,
    image: "/products/product-8.jpg",
    category: "tech",
  },
];


