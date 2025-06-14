import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length > 0) {
    }
  }, []); 

  const handleCompletePurchase = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      navigate('/');
      return;
    }
    alert(`Thank you for your purchase of $${cartTotal.toFixed(2)}! Your order has been placed.`);
    clearCart();
    navigate('/');
  }

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Checkout</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">Your cart is empty. Please add items to proceed.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Products
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
          <ul className="divide-y divide-gray-200 mb-6">
            {cartItems.map(item => (
              <li key={item.id} className="py-3 flex justify-between items-center text-lg">
                <span className="text-gray-700">{item.name} (x{item.quantity})</span>
                <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 flex justify-between items-center text-3xl font-bold text-gray-900">
            <span>Total:</span>
            <span className="text-green-600">${cartTotal.toFixed(2)}</span>
          </div>

          <p className="text-gray-600 text-sm mt-6 mb-8 text-center">
            In a real website application, you would integrate payment gateways and shipping information here.
          </p>

          <button
            onClick={handleCompletePurchase}
            className="w-full bg-green-600 text-white px-8 py-4 rounded-lg text-2xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Complete Purchase
          </button>
          <button
            onClick={() => navigate('/cart')}
            className="w-full mt-4 bg-gray-200 text-gray-800 px-8 py-3 rounded-lg text-lg hover:bg-gray-300 transition-colors"
          >
            Back to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;