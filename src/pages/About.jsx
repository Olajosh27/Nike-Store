import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          About <span className="text-red-600">OLASTORE</span> - Your Ultimate Nike Destination
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Passionate about performance, style, and innovation. We bring the best of Nike directly to you.
        </p>
      </div>

      <div className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1737804719022-f70a238a65ef?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Story"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded with a deep love for sports and a commitment to quality, OLASTORE was created to be more than just a place to buy shoes. We envisioned a hub where Nike enthusiasts could find the latest releases, classic favorites, and expert advice, all in one seamless experience. From the groundbreaking Air Jordans to the cutting-edge Nike Running lines, we curate a collection that reflects Nike's spirit of innovation and design.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey began April,2025 with a small team and a big dream: to connect people with the footwear that empowers them to achieve their best, both in sport and in style. Every pair we offer is a testament to Nike's legacy and our dedication to bringing authenticity and excellence to your doorstep.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Empowering Athletes</h3>
            <p className="text-gray-600">
              To provide the tools and inspiration for every athlete* to reach their full potential, offering cutting-edge Nike footwear that supports every movement.
            </p>
            <p className="text-sm text-gray-500 mt-2">*If you have a body, you are an athlete.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM12 21c4.552 0 8.25-3.698 8.25-8.25 0-4.552-3.698-8.25-8.25-8.25S3.75 8.198 3.75 12.75c0 3.824 2.528 7.043 6 8.25l-.558 1.674c-.2.6.28.976.84.976h2.836c.56 0 1.04-.376.84-.976l-.558-1.674z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Curating Excellence</h3>
            <p className="text-gray-600">
              To meticulously select and offer only the most authentic and high-quality Nike products, ensuring every purchase meets the highest standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20h-2.172a3 3 0 00-2.684-1.777M10 11V9m0 0V7m0 2h2m-2 0H8m2 0c1.886 0 3.409-1.523 3.409-3.409S11.886 4.182 10 4.182 6.591 5.705 6.591 7.591 8.114 11 10 11zM12 12h.01"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Exceptional Experience</h3>
            <p className="text-gray-600">
              To provide a seamless and enjoyable shopping experience, backed by friendly customer service and reliable delivery, from click to unboxing.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose OLASTORE?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Authenticity Guaranteed</h3>
            <p className="text-gray-600">All our Nike products are 100% genuine and sourced directly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Collections</h3>
            <p className="text-gray-600">Stay ahead with the newest Nike drops and exclusive releases.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">Your happiness is our priority. We're here to help.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Shopping</h3>
            <p className="text-gray-600">Shop with confidence with our secure payment gateways.</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-red-600 text-white py-12 px-6 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Sneaker Game?</h2>
        <p className="text-lg md:text-xl mb-8">
          Explore our extensive collection of Nike footwear today!
        </p>
        <a
          href="/products" 
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default About;