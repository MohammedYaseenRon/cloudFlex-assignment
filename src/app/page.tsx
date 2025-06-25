import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Welcome to Our Store
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            Premium Products
            <br />
            <span className="text-gray-800">Made Simple</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium products designed for modern living.
            Quality, style, and functionality in perfect harmony.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button
                size="lg"
                className="px-8 py-4 cursor-pointer text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 cursor-pointer text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 rounded-xl transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
            <p className="text-gray-600">
              Every product is carefully selected and tested to meet our high standards of quality and durability.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping to get your products to you as fast as possible, wherever you are.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is here to help you with any questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
