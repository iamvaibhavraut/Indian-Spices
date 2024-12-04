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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium Indian spices, carefully curated
            for authentic flavors.
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-xs"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="max-w-xs">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-spice-image.jpg";
                  }}
                />
                <Badge className="absolute top-4 right-4">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">
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
          <div className="text-center py-12">
            <p className="text-gray-500">
              No products found matching your criteria.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
