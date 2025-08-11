"use client";

import React, { useState, useEffect } from "react";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  const deals = [
    {
      id: 1,
      name: "Smart watches",
      discount: "-25%",
      image: "https://placehold.co/140x140",
    },
    {
      id: 2,
      name: "Laptops",
      discount: "-15%",
      image: "https://placehold.co/140x140",
    },
    {
      id: 3,
      name: "GoPro cameras",
      discount: "-40%",
      image: "https://placehold.co/140x140",
    },
    {
      id: 4,
      name: "Headphones",
      discount: "-25%",
      image: "https://placehold.co/140x140",
    },
    {
      id: 5,
      name: "Canon cameras",
      discount: "-25%",
      image: "https://placehold.co/140x140",
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12">
            {/* Left Banner */}
            <div className="col-span-3 bg-gradient-to-br from-gray-100 to-gray-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Deals and offers
              </h2>
              <p className="text-gray-600 mb-4">Hygiene equipments</p>
              
              {/* Timer */}
              <div className="flex space-x-2">
                <div className="bg-gray-700 text-white rounded px-2 py-1 text-center">
                  <div className="text-xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="bg-gray-700 text-white rounded px-2 py-1 text-center">
                  <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs">Hour</div>
                </div>
                <div className="bg-gray-700 text-white rounded px-2 py-1 text-center">
                  <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs">Min</div>
                </div>
                <div className="bg-gray-700 text-white rounded px-2 py-1 text-center">
                  <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs">Sec</div>
                </div>
              </div>
            </div>

            {/* Deals Grid */}
            <div className="col-span-9">
              <div className="grid grid-cols-5 divide-x divide-gray-200">
                {deals.map((deal) => (
                  <div
                    key={deal.id}
                    className="p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={deal.image}
                        alt={deal.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-800 text-sm mb-1">{deal.name}</p>
                    <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {deal.discount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
