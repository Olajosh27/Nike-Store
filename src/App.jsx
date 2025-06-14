import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './pages/Hero';
import Category from './pages/Category';
import ProductListingPage from './pages/ProductListingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFound from './pages/NotFound';
import useVoiceScreenshot from './hooks/useVoiceScreenshot';

function App() {

  const appPageRef = useRef(null);
  const { listening, feedback, browserSupport } = useVoiceScreenshot(appPageRef)

  return (
    <Router>
      <CartProvider>
        <div ref={appPageRef} className=" bg-gray-100">
          <Header />
          <main className="">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/category" element={<Category />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFound />} /> {/* 404 Route */}
            </Routes>
          </main>
          <footer className="bg-gray-950 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} My First Online Store. All rights reserved-Olanrewaju.</p>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;