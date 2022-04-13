import React from 'react'
import './Cart.css'
import cartimgsec2 from '../../Components/Images/cartimgsec2.svg'
import { Link } from 'react-router-dom'


const myCartTitle01 ='Your cart items'
const myLink01 = "Back to shopping"
const myLink02 = "Remove"
const myParagraph01 ='Tax and shipping cost will be calculated later'

const Cart = () => {
  return (
    <div className='cartpg'>
      <div className='subcarthead'>
        <h1>{myCartTitle01}</h1>
        <a href="">{myLink01}</a>
      </div>
      <div className='cartsubhead01'>
          <div className='cartsubhead1stcont'>
              <p>Product</p>
          </div>
          <div className='cartsubhead2ndcont'>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
          </div>
      </div>
      <div className='precartsubhead202'>
          <div className='cartsubhead202'>
              <div className='cartsubhead202imgcont'>
                <img src={cartimgsec2} alt="" />
              </div>
              <div className='cartsubhead2002'>
                <h2>Spiced Mint Candleaf®</h2>
                <a href="">{myLink02}</a>
              </div>
              <div className='calccont'>
                  <p>$ 9.99</p>
                  <button>
                      <div>+</div>
                      <p>1</p>
                      <div>-</div>
                  </button>
                  <p>$ 9.99</p>
              </div>
          </div>
      </div>
      <hr />
      <div className='lastseccartpg'>
        <p>Sub-total</p>
        <p>$ 9.99</p>
        <div>
        
            <button><Link to='/shipping'>Check-out</Link></button>
          
        </div>
      </div>
      <p>{myParagraph01}</p>
    </div>
  )
}

export default Cart