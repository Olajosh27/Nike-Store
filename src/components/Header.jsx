import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const { totalItemsInCart } = useCart();

  return (
    <header className="bg-black text-white px-10 md:px-28 py-6 top-0 left-0 w-full z-40 shadow-md">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to="" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Ola Store
        </Link>
         <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-200">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-300 transition-colors duration-200">Products</Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">Contact Us</Link>
          <Link to="/cart" className="relative hover:text-gray-300 transition-colors flex items-center">
                <ShoppingCartIcon className="h-6 w-6" />
                {totalItemsInCart > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItemsInCart}
                  </span>
                )}
                <span className="ml-1">Cart</span>
              </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

        {/* Mobile */}
      <div
        className={` fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden `}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
          <svg className="w-10 h-10" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path
              strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col space-y-8 text-3xl">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-200" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" className="text-white hover:text-gray-300 transition-colors duration-200" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors duration-200" onClick={closeMenu}>
            About Us
          </Link>
           <Link to="/contact" className="text-white hover:text-gray-300 transition-colors duration-200" onClick={closeMenu}>
           Contact Us
          </Link>
          <Link to="/cart" className="relative hover:text-gray-300 transition-colors flex items-center " onClick={closeMenu}>
            <ShoppingCartIcon className="h-6 w-6" />
             {totalItemsInCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
                )}
                <span className="ml-1">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;