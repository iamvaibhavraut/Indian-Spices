"use client";

import { Leaf, Shield, Award, Truck } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "100% Organic",
    description:
      "All our spices are naturally grown without any artificial additives",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Quality Assured",
    description:
      "Rigorous quality checks ensure the finest spices reach your kitchen",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Authentic Source",
    description: "Directly sourced from traditional Indian spice farms",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Global Shipping",
    description: "We deliver our premium spices worldwide with care",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Spices?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering the highest quality Indian spices that
            make your dishes truly exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
