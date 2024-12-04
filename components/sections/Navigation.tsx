import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            SpiceHaven
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-900 hover:text-gray-600"
            >
              Products
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600">
              Contact
            </Link>
            <Button className="bg-black text-white hover:bg-gray-800">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
