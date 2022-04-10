import './Products.css'
import React from 'react'
import spiceMint1s1 from '../Images/spiceMint1s1.svg'
import SweetStraweberry1s1 from '../Images/SweetStraweberry1s1.svg'
import CoolBlueberries1s1 from '../Images/CoolBlueberries1s1.svg'
import JuicyLemon1s1 from '../Images/JuicyLemon1s1.svg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// function Style[] {
//   const prodStyle = {
//     color: 'blue'
//   }
// }

// const link1 = {
//   fontWeight: '500',
//   fontSize: '16px',
//   fontFamily: ''Poppins', sans-serif'
//   paddingLeft: '15px',
//   paddingTop: '7px',
//   color: '#1D293F',
//   textDecoration: 'none'
// }
// const link2 = {
//   fontWeight: '500',
//   fontSize: '20px',
//   fontFamily: ''Roboto sans-serif',
//   color: '#56B280',
//   textAlign: 'right',
//   paddingRight: '22px'
// }  

const Products = () => {
  return (
    <div className='spimin'>
    <div>
      <div className='imgs101cont'>
      <img src={spiceMint1s1} alt="spice mint" />
      </div>
        <div className='texts101'>
        <Link to='/prodpage'>
        <h4>Spiced Mint</h4>
        <p >9.99$</p>
        </Link>
        </div>
    </div>
    <div>
      <div className='imgs101cont'>
      <img src={SweetStraweberry1s1} alt="Sweet Straweberry" />
      </div>
      <div className='texts101'>
      <h4>Sweet Straweberry</h4>
        <p>9.99$</p>
      </div>
    </div>
    <div>
      <div className='imgs101cont'>
      <img src={CoolBlueberries1s1} alt="Cool Blueberries" />
      </div>
        <div className='texts101'>
        <h4>Cool Blueberries</h4>
        <p>9.99$</p>
        </div>
    </div>
    <div>
      <div className='imgs101cont'>
      <img src={JuicyLemon1s1} alt="Juicy Lemon" />
      </div>
    <div className='texts101'>
    <h4>Juicy Lemon</h4>
    <p>9.99$</p>
    </div>
    </div>
</div>
    
  )
}

export default Products;