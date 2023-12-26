import React from 'react'
import { NavLink } from 'react-router-dom'

const Shop = () => {
  return (
    <div className='Shop'>
        <div className='container aboutText'>
             <div className='shop_text'> 
             <div>
              <h1>Free Delivery With PIZZA of the DAY only 50 Pkr</h1>
              <div className='shop_btn'>
                 <NavLink className="btn btn-primary pizashop">SHOP NOW</NavLink>
              </div>
             </div>
             </div>
        </div>
    </div>
  )
}

export default Shop