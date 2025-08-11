"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Shield, Send } from "lucide-react";

const HeroSection = () => {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <section className="bg-gray-50 py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-5">
          {/* Categories Sidebar */}
          <div className="col-span-3 bg-white rounded-lg p-0 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-5 py-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Banner */}
          <div className="col-span-6">
            <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg h-[400px] overflow-hidden">
              <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
                <p className="text-gray-600 mb-2">Latest trending</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Electronic items
                </h1>
                <Link
                  href="/shop"
                  className="inline-block bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Learn more
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-2/3 h-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-50/50"></div>
                  <img
                    src="https://placehold.co/400x400"
                    alt="Electronics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* User Card */}
            <div className="bg-blue-50 rounded-lg p-5">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-800">
                    Hi, user<br />
                    let's get started
                  </p>
                </div>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg mb-2 hover:bg-primary-dark transition-colors">
                Join now
              </button>
              <button className="w-full bg-white text-primary py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                Log in
              </button>
            </div>

            {/* Orange Card */}
            <div className="bg-orange-500 text-white rounded-lg p-5">
              <p className="text-lg font-medium mb-3">
                Get US $10 off<br />
                with a new<br />
                supplier
              </p>
            </div>

            {/* Quotes Card */}
            <div className="bg-teal-500 text-white rounded-lg p-5">
              <p className="text-lg font-medium mb-3">
                Send quotes with<br />
                supplier<br />
                preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
