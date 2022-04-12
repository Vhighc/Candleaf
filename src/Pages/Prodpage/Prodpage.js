import React from 'react'
import './Prodpage.css'

const Prodpage = () => {
  return (
    <div className='page2prod'>
        <div className='propg2prod'>
            <div className='prodpgsec01imgcont'>
                <img src="./Images/Page2prodimg.svg" alt="" />
            </div>
            <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
                <span id='freeship'>FREE SHIPPING</span>
        </div>
        <div className='presimica'>
            <h3>Spiced Mint Candleaf®</h3>
            <div className='simica'>
                <div className='subsimica01'>
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
                <div className='prodpgradiosec'>
                    <div>
                        <input type="radio" name='pay mode' />
                        <label htmlFor="">One time purchase</label>
                    </div>
                    <div className='preradiosecoptpg'>
                     <div className='radiosecoptpg'>
                        <input type="radio" name='pay mode' />
                        <label htmlFor="">Subscribe and delivery every </label>
                        <select>
                        <option value="4 weeks">4 weeks</option>
                        </select>
                     </div>
                     <div className='subsecoptpg'>
                        <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <span className='seedet'>See details</span></p>
                     </div>
                    </div>
                  
                    <button>
                    <img src="./Images/Vectorcartbutt.svg" alt="" />
                    <p>+ Add to cart</p>
                    </button>
                </div>
                </div>
                  <div className='waxfragburn'>
                    <p><strong>Wax: </strong>Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                    <p><strong>Fragrance: </strong>Premium quality ingredients with natural essential oils</p>
                    <p><strong>Burning Time: </strong>70-75 hours <strong> Dimension: </strong>10cm x 5cm <strong> Weight: </strong>400g</p>
                 </div>
           </div>
    </div>
  )
}

export default Prodpage;