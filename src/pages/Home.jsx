import React from 'react'
import FeaturedSlider from '../components/FeaturedSlider';
import Products from '../components/Products';
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
    <Header />
    <div className='my-5 '>
        <span className='card-title text-5xl blacker leading-12'>Welcone</span>
        <br />
        <span className='text-grey_1 text-3xl black leading-15'>Our Fashions App</span>
        <br />
        <div className='flex gap-3 items-center'>
            <div className="input-icons flex-initial w-87">
                <i class="fa fa-search icon"></i>
                <input className="input-field inp" type="search" placeholder='search' />
            </div>
            <img className="flex-initial inline-block" src="/images/filtter.svg" alt="" width={50}/>
        </div>
        <FeaturedSlider />
        <div className='flex justify-between mt-5 px-12'>
        <span className='card-title-2 text-2xl blacker'>New Arrival</span>
        <span className='text-grey_1 text-1xl black'>view all</span>
        </div>
        <Products />
    </div>
    </div>
  )
}

export default Home;