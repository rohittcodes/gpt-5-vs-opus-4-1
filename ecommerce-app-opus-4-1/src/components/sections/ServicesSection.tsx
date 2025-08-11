"use client";

import React from "react";
import { Search, Shield, Send, Package } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Source from Industry Hubs",
      bgColor: "bg-gray-100",
      iconBg: "bg-gray-300",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Customize Your Products",
      bgColor: "bg-gray-100", 
      iconBg: "bg-gray-300",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Fast, reliable shipping by ocean or air",
      bgColor: "bg-gray-100",
      iconBg: "bg-gray-300",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Product monitoring and inspection",
      bgColor: "bg-gray-100",
      iconBg: "bg-gray-300",
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our extra services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className={`${service.bgColor} aspect-square p-6`}>
                <div className={`${service.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <p className="font-medium text-gray-900">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
