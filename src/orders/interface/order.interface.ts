export interface Order {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
  images?: string[];
  sellerId: string;
  status: string;
  promoCode: string | null;
  discountPercent: number;
  createdAt: number;
}
