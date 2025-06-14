import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  useEffect(() => {
        AOS.init({
          offset: 100,
          duration:500,
          easing: 'ease-in-out',
        });
    
        AOS.refresh();
      }, [])

  return (
    <div data-aos="zoom-in" data-aos-delay="50" className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between transform transition-transform hover:scale-105">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {product.name}
        </h3>
        <p className="text-gray-700 text-lg font-bold mb-4">
          ${product.price.toFixed(2)}
        </p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
