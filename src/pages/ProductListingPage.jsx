import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productsData from '../data/products.json';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); 
        setProducts(productsData);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    
    };

    fetchProducts();

    AOS.init({
        offset: 100,
        duration:500,
        easing: 'ease-in-out',
    });
    
    AOS.refresh();
  }, []);
    

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center text-gray-600">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h2 data-aos="zoom-in" data-aos-delay="50" className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;