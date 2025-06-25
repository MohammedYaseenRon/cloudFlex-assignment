import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import { dummyProducts } from "@/lib/dummyProduct";

const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
        <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
        />
    ));
};

export async function generateStaticParams() {
    return dummyProducts.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params, }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = dummyProducts.find((p) => p.id === parseInt(resolvedParams.id));

    if (!product) {
        return <div className="p-8 text-center text-red-500">Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/products">
                        <Button variant="ghost" className="mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-16 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">
                                {product.category}
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex items-center">
                                    {renderStars(product.rating || 0)}
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                    {product.rating}
                                </span>
                                <span className="text-sm text-gray-500">
                                    ({product.reviews} reviews)
                                </span>
                            </div>

                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-3xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-xl text-gray-500 line-through">
                                            ${product.originalPrice}
                                        </span>
                                        <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                                            Save ${(product.originalPrice - product.price).toFixed(2)}
                                        </span>
                                    </>
                                )}
                            </div>

                            <div className="mb-6">
                                {product.stock && product.stock > 0 ? (
                                    <span className="inline-flex items-center text-green-600 text-sm font-medium">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center text-red-600 text-sm font-medium">
                                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                        </div>

                        {product.features && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="flex space-x-3">
                                <Button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
                                    disabled={!product.stock || product.stock <= 0}
                                >
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline" size="lg" className="px-4">
                                    <Heart className="w-5 h-5" />
                                </Button>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full py-3 text-lg font-semibold"
                                disabled={!product.stock}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
