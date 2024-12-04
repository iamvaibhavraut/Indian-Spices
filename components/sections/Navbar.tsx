"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-primary">
            SpiceHaven
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Products</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
              <Button>Shop Now</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button variant="ghost" className="w-full justify-start">Home</Button>
            <Button variant="ghost" className="w-full justify-start">Products</Button>
            <Button variant="ghost" className="w-full justify-start">About</Button>
            <Button variant="ghost" className="w-full justify-start">Contact</Button>
            <Button className="w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}