"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Experience the Authentic Flavors of India
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Discover our premium collection of hand-picked, authentic Indian
          spices that bring the true essence of traditional Indian cuisine to
          your kitchen.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="text-lg">
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
