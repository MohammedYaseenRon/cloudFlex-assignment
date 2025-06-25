export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    originalPrice?: number;
    rating?: number;
    reviews?: number;
    stock?: number;
    features?: string[];
}

