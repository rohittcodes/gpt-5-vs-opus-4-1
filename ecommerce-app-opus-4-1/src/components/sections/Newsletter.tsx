"use client";

import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Subscribe on our newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <form className="flex max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
