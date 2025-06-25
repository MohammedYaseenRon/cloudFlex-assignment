import { ShoppingBag, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { dummyProducts } from "@/lib/dummyProduct";

const Product = ({ product }: { product: Product }) => {
    return (
        <Card className="group overflow-hidden border-0 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white p-0">
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-gray-100 text-gray-900"
                    >
                        <EyeIcon className="w-4 h-4 group-hover:text-blue-600 transition-colors duration-200" />
                        Quick View
                    </Button>
                </div>
            </div>
            <CardContent className="p-6">
                <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {product.category}
                    </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">{product.name}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>
                </div>
                <Link href={`/products/${product.id}`}><Button
                    className="w-full cursor-pointer mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    View Details
                </Button></Link>
            </CardContent>
        </Card>


    )
}


export default function Products() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Products</h1>
                    </div>
                    <div className="text-center py-4">
                        <p className="text-2xl lg:text-3xl font-medium text-white">Discover our curated collection of premium products designed for modern living</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 lg:px-16 py-16">
                <div className="mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-black">Featured Products</h2>
                    <p className="text-lg font-medium text-gray-400">
                        {dummyProducts.length} Products available
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8">
                    {dummyProducts.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}><Product product={product} /></Link>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-8 py-3 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                        Load More Products
                    </Button>
                </div>
            </div>

        </div>
    )
}