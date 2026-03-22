export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

