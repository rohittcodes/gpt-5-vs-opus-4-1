"use client";

import React from "react";
import Link from "next/link";

const SuppliersSection = () => {
  const suppliers = [
    { country: "Arabic Emirates", flag: "🇦🇪", website: "shopname.ae" },
    { country: "Australia", flag: "🇦🇺", website: "shopname.au" },
    { country: "United States", flag: "🇺🇸", website: "shopname.us" },
    { country: "Russia", flag: "🇷🇺", website: "shopname.ru" },
    { country: "Italy", flag: "🇮🇹", website: "shopname.it" },
    { country: "Denmark", flag: "🇩🇰", website: "shopname.dk" },
    { country: "France", flag: "🇫🇷", website: "shopname.fr" },
    { country: "China", flag: "🇨🇳", website: "shopname.cn" },
    { country: "Great Britain", flag: "🇬🇧", website: "shopname.co.uk" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Suppliers by region
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {suppliers.map((supplier, index) => (
            <Link
              key={index}
              href={`/suppliers/${supplier.country.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span className="text-3xl">{supplier.flag}</span>
              <div>
                <p className="font-medium text-gray-900">{supplier.country}</p>
                <p className="text-sm text-gray-500">{supplier.website}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuppliersSection;
