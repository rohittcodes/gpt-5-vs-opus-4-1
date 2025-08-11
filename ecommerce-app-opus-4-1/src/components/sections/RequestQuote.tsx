"use client";

import React from "react";

const RequestQuote = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                An easy way to send requests to all suppliers
              </h2>
              <p className="text-blue-100 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Send quote to suppliers
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="What item you need?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Type more details"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                    <option>Pcs</option>
                    <option>Box</option>
                    <option>Kg</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
