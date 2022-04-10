import React from 'react'
import Productname2s1 from '../Images/Productname2s1.svg'
import FragrantCinnamon2s1 from '../Images/FragrantCinnamon2s1.svg'
import SummerCherries2s1 from '../Images/SummerCherries2s1.svg'
import CleanLavander2s1 from '../Images/CleanLavander2s1.svg'
import './Product2s1.css'

const Produvt2s1 = () => {
  return (
     <div className='prodnam'>
        <div>
          <div className='imgcon2s1'>
          <img src={Productname2s1} alt="Product name" />
          </div>
            <div className='textcon2s1'>
            <h4>Product name</h4>
            <p>9.99$</p>
            </div>
        </div>
        <div>
          <div className='imgcon2s1'>
          <img src={FragrantCinnamon2s1} alt="Fragrant Cinnamon" />
          </div>
          <div className='textcon2s1'>
          <h4>Fragrant Cinnamon</h4>
            <p>9.99$</p>
          </div>
        </div>
        <div>
          <div className='imgcon2s1'>
          <img src={SummerCherries2s1} alt="Summer Cherries" />
          </div>
            <div className='textcon2s1'>
            <h4>Summer Cherries</h4>
            <p>9.99$</p>
            </div>
        </div>
        <div>
          <div className='imgcon2s1'>
          <img src={CleanLavander2s1} alt="Clean Lavander" />
          </div>
        <div className='textcon2s1'>
        <h4>Clean Lavander</h4>
        <p>9.99$</p>
        </div>
        </div>
    </div>
  )
}

export default Produvt2s1;