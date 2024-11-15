/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useContext } from 'react'
import './BookItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

function BookItem ({id,name,price,description,image}) {
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='book-item'>
        <div className="book-item-img-container">
            <img className='book-item-image' src={image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className='book-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                  <p className='cartitemsp'>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='' />
                  </div>
            }
        </div>
        <div className="book-item-info">
            <div className="book-item-name-rating">
                <p className='namewe'>{name}</p>
                <img className='ratingstars' src={assets.rating_starts} alt="" />
            </div>
            <p className="book-item-desc">{description}</p>
            <p className="book-item-price">${price}</p>
        </div>
    </div>
  )
}

export default BookItem