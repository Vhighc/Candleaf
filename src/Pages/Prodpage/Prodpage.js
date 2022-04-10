import React from 'react'
import './Prodpage.css'

const Prodpage = () => {
  return (
    <div className='page2prod'>
        <div>
            <div>
                <figure>
                <img src="./Images/Page2prodimg.svg" alt="" />
                <figcaption>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</figcaption>
                </figure>
            </div>
                <span>FREE SHIPPING</span>
        </div>
        <div>
            <h3>Spiced Mint Candleaf®</h3>
            <div className='simica'>
                <div>
                <h2>$ 9.99</h2>
                <p>Quantity</p>  
                <div className='prodpagebutt'>
                    <button>
                    <div>+</div>
                    <p>1</p> 
                    <div>-</div>
                    </button>
                </div>
                </div> 
                <div>
                    <div>
                        <input type="radio" name='pay mode' />One time purchase
                    </div>
                    <div>
                        <input type="radio" name='pay mode' />Subscribe and delivery every 
                        <select>
                        <option value="4 weeks">4 weeks</option>
                        </select>
                    </div>
                    <div>
                        <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details</p>
                    </div>
                    <button>
                    <img src="./Images/Vectorcartbutt.svg" alt="" />
                    <p>+ Add to cart</p>
                    </button>
                    <div>
                        <p>Wax: Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                        <p>Fragrance: Premium quality ingredients with natural essential oils </p>
                        <div>
                        <p>Burning Time: 70-75 hours</p>
                        <p>Dimension: 10cm x 5cm </p>
                        <p>Weight: 400g </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prodpage;