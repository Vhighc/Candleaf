import React from 'react'
// import React, { Components } from 'react'
import './Home.css'
import Soywax from '../../Components/Soywax/Soywax'
import Products from '../../Components/Products/Products'
import Produvt2s1 from '../../Components/Product2s1/Produvt2s1'
import '../../heroStyles.css'
import styles from '../../heroStyles.module.css'
import Cards3 from '../../Components/Cards3/Cards3'
import Hero from '../../Components/Hero/Hero'

const myTitle1 = 'Products';
const myParagraph1 = 'Order it for you or for your beloved ones';
const myTitle2 ='Testimonials';
const myParagraph2 ='Some quotes from our happy customers';
const myParagraph3 ='Our top selling product that you may like' 

const Home = () => {
  return (
    <div >
        <div className={styles.herosec}>
            <Hero />
        </div>
        <div className='subhero'>
           <h1>{ myTitle1 }</h1>
           <p>{ myParagraph1 }</p>
        </div>
        <Products />
        <>
        <Produvt2s1 />
        </>
        <Soywax />
        <div className='sec3'>
           <h1>{ myTitle2 }</h1>
           <p>{ myParagraph2 }</p>
        <Cards3 />
        </div>
         <div className='subhero'>
           <h1>{ myTitle1 }</h1>
           <p>{ myParagraph3 }</p>
         </div>
         <div className='prodsec4'>
        <Products />
        </div> 
    </div>
  )
}

export default Home;