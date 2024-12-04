"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=random",
  },
  {
    name: "Priya Sharma",
    role: "Head of Quality",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random",
  },
  {
    name: "Amit Patel",
    role: "Supply Chain Manager",
    image: "https://ui-avatars.com/api/?name=Amit+Patel&background=random",
  },
  {
    name: "Neha Gupta",
    role: "Customer Relations",
    image: "https://ui-avatars.com/api/?name=Neha+Gupta&background=random",
  },
];

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing authentic Indian spices to your kitchen since 1995
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px]">
            <Image
              src="/images/about-spices.jpg"
              alt="Spice harvesting"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Heritage</h2>
            <p className="text-gray-600 mb-4">
              For over two decades, we&apos;ve been sourcing the finest spices
              from traditional Indian farms, ensuring that each product meets
              our strict quality standards.
            </p>
            <p className="text-gray-600">
              Our commitment to authenticity and quality has made us a trusted
              name in Indian spices, serving customers worldwide.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Quality",
              description:
                "We source only the finest spices from trusted farmers.",
              icon: "🌟",
            },
            {
              title: "Sustainability",
              description: "Supporting eco-friendly farming practices.",
              icon: "🌱",
            },
            {
              title: "Tradition",
              description:
                "Preserving authentic Indian spice blending methods.",
              icon: "🏺",
            },
          ].map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-32 w-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
