export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'vendor' | 'admin';
  avatar?: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  rating: number;
  reviews: Review[];
  vendorId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Order {
  id: string;
  products: OrderProduct[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  vendorId: string;
  customerId: string;
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
  name: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Vendor {
  id: string;
  userId: string;
  storeName: string;
  description: string;
  logo?: string;
  status: 'pending' | 'approved' | 'rejected';
  products: Product[];
  earnings: number;
  rating: number;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'order' | 'promotion' | 'system';
  read: boolean;
  createdAt: string;
}

export interface Chat {
  id: string;
  participants: string[];
  messages: ChatMessage[];
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export interface Commission {
  vendorId: string;
  rate: number;
  earnings: number;
  lastPayout: string;
}