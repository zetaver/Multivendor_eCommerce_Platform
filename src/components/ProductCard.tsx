import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">
            ({product.reviews.length} reviews)
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
            {product.stock < 10 && (
              <p className="text-sm text-red-500 mt-1">
                Only {product.stock} left!
              </p>
            )}
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;