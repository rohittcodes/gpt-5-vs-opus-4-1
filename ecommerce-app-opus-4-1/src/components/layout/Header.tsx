"use client";

import React from "react";
import { Search, ShoppingCart, User, MessageSquare, Heart, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[86px]">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-primary font-bold text-2xl">Brand</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2.5 border-2 border-primary rounded-l-lg focus:outline-none focus:border-primary-dark"
                />
                <select className="px-4 py-2.5 border-y-2 border-primary bg-white focus:outline-none">
                  <option>All categories</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                  <option>Home & Garden</option>
                  <option>Books</option>
                </select>
                <button className="px-6 py-2.5 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-6">
              <Link href="/profile" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
                <User className="w-6 h-6 mb-1" />
                <span className="text-xs">Profile</span>
              </Link>
              <Link href="/messages" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
                <MessageSquare className="w-6 h-6 mb-1" />
                <span className="text-xs">Message</span>
              </Link>
              <Link href="/orders" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
                <Heart className="w-6 h-6 mb-1" />
                <span className="text-xs">Orders</span>
              </Link>
              <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 mb-1" />
                  <span className="absolute -top-1 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="text-xs">My cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>All category</span>
              </button>
              <Link href="/hot-offers" className="text-gray-700 hover:text-primary transition-colors">
                Hot offers
              </Link>
              <Link href="/gift-boxes" className="text-gray-700 hover:text-primary transition-colors">
                Gift boxes
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/menu-item" className="text-gray-700 hover:text-primary transition-colors">
                Menu item
              </Link>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Help</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                <span>English, USD</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                <span className="text-xl">🇺🇸</span>
                <span>Ship to</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
