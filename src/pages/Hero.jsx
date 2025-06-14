import React, { useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nikedunk from '../assets/nikedunk.png'
import dunk from '../assets/dunk.png'
import nikedaritos from '../assets/nikedaritos.png'
import bga from '../assets/bga.jpg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Category from './Category';
import About from './About'


const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration:500,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, [])


  return (
    <div>
      <div id='hero' className='w-full overflow-hidden'>
      <Slider className='w-full' {...settings}>
        <div >
          <div className="
            flex flex-col md:flex-row items-center justify-between md:px-28 py-8 md:py-16 lg:py-20 xl:py-24 min-h-[500px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] h-auto bg-cover bg-center bg-no-repeat relative
          " style={{backgroundImage:`url(${bga})`
          }}>
            <div className=" w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 lg:gap-6 px-4 md:px-0 z-10 relative
          ">
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white border rounded-lg border-gray-500 px-6 py-2 text-xl'>Get up to Discounts 80% off</h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Nike SB Dunk <br /> Sneakers</h1>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl'>100% trusted <span className='text-gray-500 font-semibold'>Sneakers</span></h1> 
              <Link to="/products" data-aos="zoom-in" data-aos-delay="50" className="bg-gray-700 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-500 transition-colors">
                Shop Now
              </Link>
            </div> 
            <div className="
            w-11/12 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center mt-8 md:mt-0
            ">
              <img data-aos="zoom-in" data-aos-delay="50" className="
                w-full h-auto object-contain max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72
              " src={nikedunk} alt="" />
            </div>           
          </div>        
        </div>
        <div >
          <div className="
            flex flex-col md:flex-row items-center justify-between md:px-28 py-8 md:py-16 lg:py-20 xl:py-24 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[700px] h-auto bg-cover bg-center bg-no-repeat relative
          " style={{backgroundImage:`url(${bga})`
          }}>
            <div className=" w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 lg:gap-6 px-4 md:px-0  z-10 relative
          ">
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white border rounded-lg border-gray-500 px-6 py-2 text-xl'>New Arrivals- Limited Slots</h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[100px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Nike Daritos <br /> Sneakers</h1>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl'>Unbeatable quality <span className='text-gray-500 font-semibold'>and comfort</span></h1> 
              <Link to="/products" data-aos="zoom-in" data-aos-delay="50" className="bg-gray-700 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-500 transition-colors">
                Discover More
              </Link>
            </div> 
            <div className="
            w-11/12 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center mt-8 md:mt-0
            ">
              <img data-aos="zoom-in" data-aos-delay="50" className="
                w-full h-auto object-contain max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72
              " src={nikedaritos} alt="" />
            </div>           
          </div>        
        </div>
        <div >
          <div className="
            flex flex-col md:flex-row items-center justify-between md:px-28 py-8 md:py-16 lg:py-20 xl:py-24 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[700px] h-auto bg-cover bg-center bg-no-repeat relative
          " style={{backgroundImage:`url(${bga})`
          }}>
            <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 lg:gap-6 px-4 md:px-0 z-10 relative
          ">
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white border rounded-lg border-gray-500 px-6 py-2 text-xl'>Explore our latest Footwears</h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[100px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Nike SB Dunk <br /> Sneakers</h1>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl'>100% trusted <span className='text-gray-500 font-semibold'>Sneakers</span></h1> 
              <Link to="/products" data-aos="zoom-in" data-aos-delay="50" className="bg-gray-700 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-500 transition-colors">
                Shop Now
              </Link>
            </div> 
            <div className="
            w-11/12 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center mt-8 md:mt-0
            ">
              <img data-aos="zoom-in" data-aos-delay="50" className="
                w-full h-auto object-contain max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72
              " src={dunk} alt="" />
            </div>           
          </div>        
        </div>
      </Slider>
      </div>
      <div>
        <Category />
        <About />
      </div>
    </div>
    
  )
}

export default Hero
