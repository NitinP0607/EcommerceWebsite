import React from 'react'
import './PopularProducts.css'
import { assets } from '../../assets/assets'

const PopularProducts = () => {
  return (
    <div className='popular-products-container'>
      <div className="popular-products-title">
        <h2>Popular Products</h2>
        <p>Discover trending fashion collections featuring premium styles for men, women, and kids at unbeatable prices.</p>
      </div>
      <div className="popular-products-info">
        <div className="popular-product-box">
          <div className="mens-collection">
            <div className="mens-collection-card">
              <div className="image-collections">
                <img src={assets.mens_collection} alt="" />
              </div>
            </div>
            <h3>Men's Collection</h3>
            <p>Explore our latest collection of men's fashion, from casual wear to formal attire.</p>
          </div>
          <div className="womens-collection">    
            <div className="womens-collection-card">
              <div className="image-collections">
                <img src={assets.womens_collection} alt="" />
              </div>
            </div>
            <h3>Women's Collection</h3>
            <p>Explore our latest collection of women's fashion, from casual wear to formal attire.</p>
          </div>
          <div className="kids-collection">           
            <div className="kids-collection-card">
              <div className="image-collections">
                <img src={assets.kids_collection} alt="" />
              </div>
            </div>
            <h3>Kids' Collection</h3>
            <p>Explore our latest collection of kids' fashion, from casual wear to formal attire.</p>
          </div>
          <div className="kids-collection">           
            <div className="kids-collection-card">
              <div className="image-collections">
                <img src={assets.accessories} alt="" />
              </div>
            </div>
            <h3>Accessories</h3>
            <p>Explore our latest collection of accessories, from stylish hats to elegant jewelry.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
