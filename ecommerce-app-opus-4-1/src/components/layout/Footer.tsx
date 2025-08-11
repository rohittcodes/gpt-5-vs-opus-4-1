"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-3">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-primary font-bold text-2xl">Brand</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary transition-colors">
                  Find store
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnership */}
          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Partnership</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary transition-colors">
                  Find store
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/money-refund" className="text-gray-600 hover:text-primary transition-colors">
                  Money Refund
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-primary transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* For users */}
          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">For users</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-gray-600 hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-gray-600 hover:text-primary transition-colors">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-primary transition-colors">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Get app */}
          <div className="col-span-12 lg:col-span-3">
            <h3 className="font-semibold text-gray-900 mb-4">Get app</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="inline-block">
                <img
                  src="https://placehold.co/135x40"
                  alt="App Store"
                  className="h-10"
                />
              </Link>
              <Link href="#" className="inline-block">
                <img
                  src="https://placehold.co/135x40"
                  alt="Google Play"
                  className="h-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2023 Ecommerce.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
                <span className="text-xl">🇺🇸</span>
                <span className="text-sm">English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
