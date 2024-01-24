
export interface IProductCard {
    title: string;
    images: string[];
    category: string;
    price: number;
    discountPercentage: number;
    discountPrice: string;
    image: string;
    id: string;
}

export interface IProductResult {
    limit: string;
    products: IProductCard[];
    skip: number;
    total: number;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity: number;
}

export interface IWebsiteMetadata {
    title: string;
    keywords: string;
    description: string;
    OG_Title_Key: string;
    OG_Title_Content: string;
}

export interface ILocalStorageProduct extends IProduct {
    product_count: string;
}