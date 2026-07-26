export interface Review {
    id: string;
    productId: string;
    productName: string;
    sellerId: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: number;
}
