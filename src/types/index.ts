export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  image_url: string | null;
  created_at: string;
  rating?: number;
}

export interface Order {
  id: string;
  order_code: string;
  order_name: string;
  customer_name: string;
  customer_email: string;
  service: string;
  price: number;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  description: string | null;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  price: string;
  originalPrice?: string;
  priceNote?: string;
  features: string[];
  icon: string;
  badge?: string;
  popular?: boolean;
  image?: string;
  images?: string[];
  media?: Array<{ type: 'image' | 'video'; url: string }>;
  rating?: number;
  reviews?: number;
  userReviews?: Array<{
    username: string;
    rating: number;
    text: string;
    date: string;
    helpful?: boolean;
  }>;
  purchaseUrl?: string;
  categoryId: string;
}

export interface Category {
  id: string;
  label: string;
  description: string;
  layout: 'services' | 'grid';
  items: Product[];
}