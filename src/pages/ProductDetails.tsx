import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { Product } from '../types';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - replace with API call
  const product: Product = {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and long battery life. Perfect for music lovers and professionals who demand the best audio experience.',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29'
    ],
    category: 'Electronics',
    stock: 15,
    rating: 4.5,
    reviews: [
      { id: 'r1', userId: 'u1', userName: 'John Doe', rating: 5, comment: 'Amazing sound quality!', createdAt: '2024-03-15' },
      { id: 'r2', userId: 'u2', userName: 'Jane Smith', rating: 4, comment: 'Great battery life, comfortable fit.', createdAt: '2024-03-14' }
    ],
    vendorId: 'v1',
    status: 'approved',
    createdAt: '2024-03-01',
    updatedAt: '2024-03-01'
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const addToCart = () => {
    // Implement cart functionality
    console.log('Adding to cart:', { product, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <motion.img
              key={selectedImage}
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-indigo-600' : ''
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviews.length} reviews)</span>
              </div>
              <span className="text-gray-600">|</span>
              <span className="text-green-600">{product.stock} in stock</span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <p className="mt-2 text-sm text-gray-500">Free shipping on orders over $100</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border-r hover:bg-gray-50"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-16 text-center focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border-l hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => console.log('Add to wishlist')}
                className="p-2 rounded-lg border hover:bg-gray-50"
              >
                <Heart className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t pt-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
        <div className="space-y-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{review.userName}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-4 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;