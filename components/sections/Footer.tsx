"use client";

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SpiceHaven</h3>
            <p className="text-sm">
              Bringing authentic Indian spices to your kitchen, ensuring every
              dish is a masterpiece of flavor.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Turmeric
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Garam Masala
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Red Chilli
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  View All
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} SpiceHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
