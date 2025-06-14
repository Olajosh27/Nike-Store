import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center min-h-[calc(100vh-160px)] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-lg text-gray-600 mb-8">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Shopping Cart</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="border-b pb-4 mb-4 grid grid-cols-5 gap-6 md:gap-0 font-semibold text-gray-600">
          <div className="col-span-2">Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-5 items-center  py-4 border-b last:border-b-0">
            <div className="col-span-2 flex flex-col md:flex-row items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <Link to={`/product/${item.id}`} className="font-semibold text-gray-800 hover:text-blue-600">
                {item.name}
              </Link>
            </div>
            <div className="text-gray-700">${item.price.toFixed(2)}</div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                title="Remove item"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="font-semibold text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Cart Total: <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={clearCart}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          &larr; Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;