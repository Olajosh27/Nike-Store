import React, { useEffect } from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Category = () => {

  useEffect(() => {
      AOS.init({
        offset: 100,
        duration:500,
        easing: 'ease-in-out',
      });
  
      AOS.refresh();
    }, [])
  
  return (
    <div className='flex lg:flex-row flex-col justify-center items-center px-10 py-8 lg:py-10 xl:py-8 w-full gap-8 '>
      <div className='px-7 py-9 bg-gray-400 w-full lg:w-1/2 h-[240px] border rounded-xl flex justify-between items-end bg-center bg-cover' style={{backgroundImage:`url(${cat2})`}}> 
        <p data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl '>The Look Of Speed</p>
        <Link to="/products" data-aos="zoom-in" data-aos-delay="50" className="bg-white text-black px-2 py-2 rounded-xl text-xl text-center font-semibold hover:bg-gray-500 transition-colors">
                Shop Now
              </Link>
      </div>
      <div className='px-7 py-9 bg-gray-400 w-full lg:w-1/2 h-[240px] border rounded-xl flex justify-between items-end bg-center bg-cover' style={{backgroundImage:`url(${cat1})`}}>
        <p data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl '>Comfortable Spotlight</p>
        <Link to="/products" data-aos="zoom-in" data-aos-delay="50" className="bg-white text-black px-2 py-2 rounded-xl text-xl text-center font-semibold hover:bg-gray-500 transition-colors">
                Shop Now
              </Link>
      </div>
    </div>
  )
}

export default Category
