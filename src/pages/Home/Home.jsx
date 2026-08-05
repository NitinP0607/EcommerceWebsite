import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import WhyShopWithUs from '../../components/WhyShopWithUs/WhyShopWithUs'
import Categories from '../../components/FeaturedCotegories/Categories'
const Home = () => {
  return (
    <div className='home-container'>
      <Hero />
      <PopularProducts />
      <WhyShopWithUs />
    </div>
  )
}

export default Home
