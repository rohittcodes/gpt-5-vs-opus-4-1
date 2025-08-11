"use client";

import React from "react";
import Link from "next/link";

interface CategoryItem {
  name: string;
  price?: string;
  image: string;
}

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  bgColor?: string;
  items: CategoryItem[];
  ctaText?: string;
  ctaLink?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  subtitle,
  bgImage,
  bgColor = "bg-gradient-to-r from-gray-900 to-gray-700",
  items,
  ctaText = "Source now",
  ctaLink = "/category",
}) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12">
            {/* Left Banner */}
            <div className={`col-span-3 ${bgColor} p-6 text-white relative overflow-hidden`}>
              {bgImage && (
                <div className="absolute inset-0 opacity-20">
                  <img src={bgImage} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                {subtitle && <p className="text-gray-200 mb-6">{subtitle}</p>}
                <Link
                  href={ctaLink}
                  className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  {ctaText}
                </Link>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-span-9">
              <div className="grid grid-cols-4 divide-x divide-gray-200">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-rows-2 divide-y divide-gray-200 h-full">
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                        {item.price && (
                          <p className="text-sm text-gray-500">From {item.price}</p>
                        )}
                      </div>
                      <div className="p-4 flex items-center justify-center bg-gray-50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
