"use client";

import React from "react";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      description: "For Small Parties & Gatherings",
      price: "£99",
      period: "/monthly",
      features: [
        "Access to standard courts",
        "Up to 10 participants",
        "Free basic refreshments",
        "Email support",
      ],
      buttonText: "Get started",
      highlight: false,
    },
    {
      title: "Pro",
      description: "For Get Togethers & Events",
      price: "£199",
      period: "/monthly",
      features: [
        "Access to premium courts",
        "Up to 25 participants",
        "Customized event planning",
        "Priority email & chat support",
      ],
      buttonText: "Get started",
      highlight: true, 
    },
    {
      title: "Enterprise",
      description: "For Corporate Events",
      price: "£399",
      period: "/monthly",
      features: [
        "Exclusive access to all facilities",
        "Unlimited participants",
        "Catering & hospitality services",
        "Dedicated event manager",
      ],
      buttonText: "Get started",
      highlight: false,
    },
  ];

  return (
    <section className="relative bg-white py-12 px-6 md:px-16">
      {/* Yellow Line */}
      {/* <div className="absolute top-0 left-0 w-full h-2 bg-primary" /> */}
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-medium text-gray-900">
          Flexible Packages to Suit Your Needs
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-md border £{
              plan.highlight
                ? "bg-pink-100 border-pink-500 transform scale-105" // Highlighted plan
                : "bg-white border-gray-200"
            } transition-all duration-300`}
          >
            {/* Badge for Highlight */}
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                Popular
              </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900">{plan.description}</h3>
            <p className="text-gray-600 mb-4">{plan.title}</p>

            {/* Price */}
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {plan.price}
              <span className="text-lg font-medium text-gray-500">{plan.period}</span>
            </div>

            {/* Features */}
            <ul className="text-gray-600 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 mb-2">
                  <span className="text-pink-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-lg text-white font-medium £{
                plan.highlight
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-gray-800 hover:bg-gray-900"
              } transition-all duration-300`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
        {/* Add a yellow line */}
        {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-primary" /> */}
    </section>
  );
};

export default PricingSection;
