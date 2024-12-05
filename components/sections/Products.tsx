"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Premium Turmeric Powder",
    price: "₹749",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Pure and aromatic turmeric powder from the finest farms of India.",
    badge: "Bestseller",
  },
  {
    name: "Organic Garam Masala",
    price: "₹1,083",
    image:
      "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "A perfect blend of premium whole spices for authentic Indian flavor.",
    badge: "Popular",
  },
  {
    name: "Kashmir Red Chilli",
    price: "₹833",
    image:
      "https://images.unsplash.com/photo-1604669270145-3cef4fb23663?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Rich in color and moderate in heat, perfect for any dish.",
    badge: "New",
  },
  {
    name: "Cardamom Pods",
    price: "₹1,249",
    image: "https://images.unsplash.com/photo-1615485290449-501456b7bc77",
    description: "Premium green cardamom pods with intense aroma.",
    badge: "Premium",
    category: "Whole Spices",
  },
  {
    name: "Cinnamon Sticks",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55",
    description: "Ceylon cinnamon sticks with sweet and delicate flavor.",
    badge: "Organic",
    category: "Whole Spices",
  },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Featured Products
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Discover our selection of premium Indian spices, carefully curated
            for authentic flavors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" className="text-base sm:text-lg" asChild>
              <Link href="/products">
                Explore Products <span className="ml-2">→</span>
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base sm:text-lg"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:max-w-xs"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:max-w-xs">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Whole Spices">Whole Spices</SelectItem>
              <SelectItem value="Ground Spices">Ground Spices</SelectItem>
              <SelectItem value="Blends">Blends</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 sm:h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-spice-image.jpg";
                  }}
                />
                <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500">
              No products found matching your criteria.
            </p>
          </div>
        )}

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/products">
            <Button size="lg" variant="secondary">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
