import React from 'react'
import Menu from './Menu'
import Sdata from '../SDATA'

const Prices = () => {
  return (
    <>
        <div className='Prices'>
            <div className='container aboutText '>
             <div className='MenuHeading'>
                <h3>Pizza Menu</h3>
                <h1>WELCOME TO SAAD PIZZA</h1>
             </div>
            <div className='row'>
             {Sdata.map((items) =>
                 
                   <div className='col-4'>
                      <div className='price'>
                        <div className='price_img'>
                       <img src={items.img} />
                        </div>
                        <h1 className='price_heading'>{items.name}</h1>
                         <p className='price_text'> {items.detail} </p>
                <p className='price_rs'>{items.price}</p>
                      </div>
                   </div>
             )}
             </div>
                 
            </div>
        </div>
    </>
  )
}

export default Prices