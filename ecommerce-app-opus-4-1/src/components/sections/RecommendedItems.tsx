"use client";

import React from "react";
import Link from "next/link";

const RecommendedItems = () => {
  const items = [
    {
      id: 1,
      name: "T-shirts with multiple colors, for men",
      price: "$10.30",
      image: "https://placehold.co/200x200",
    },
    {
      id: 2,
      name: "Jeans shorts for men blue color",
      price: "$10.30",
      image: "https://placehold.co/200x200",
    },
    {
      id: 3,
      name: "Brown winter coat medium size",
      price: "$12.50",
      image: "https://placehold.co/200x200",
    },
    {
      id: 4,
      name: "Jeans bag for travel for men",
      price: "$34.00",
      image: "https://placehold.co/200x200",
    },
    {
      id: 5,
      name: "Leather wallet",
      price: "$99.00",
      image: "https://placehold.co/200x200",
    },
    {
      id: 6,
      name: "Canon camera black, 100x zoom",
      price: "$9.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 7,
      name: "Headset for gaming with mic",
      price: "$8.99",
      image: "https://placehold.co/200x200",
    },
    {
      id: 8,
      name: "Smartwatch silver color modern",
      price: "$10.30",
      image: "https://placehold.co/200x200",
    },
    {
      id: 9,
      name: "Blue wallet for men leather material",
      price: "$10.30",
      image: "https://placehold.co/200x200",
    },
    {
      id: 10,
      name: "Jeans bag for travel for men",
      price: "$80.95",
      image: "https://placehold.co/200x200",
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended items</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  {item.price}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedItems;
