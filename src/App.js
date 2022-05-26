
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Prodpage from './Pages/Prodpage/Prodpage'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Basket from './Pages/Basket/Basket'
import { useState } from 'react';
import data from '../src//Data'
 import Receipt from './Pages/Receipt/Receipt';
 import Thanks from './Pages/Thanks/Thanks'
 import Payment from './Pages/Payment/Payment';
 import Shipping from './Pages/Shipping/Shipping'

 
function App() {
  const {products} = data;
  const [addItems, setAddItems] = useState([]);
  const onAdd = (good) => {
    const exist = addItems.find(x => x.id === good.id);
    if (exist) {
      setAddItems(addItems.map(x => x.id === good.id ? {...exist, qty: exist.qty + 1} : x
        )
        );
      } else {
      setAddItems([...addItems, {...good, qty: 1}]);
    }
  }
  
const onRemove = (product) => {
  const exist = addItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
      setAddItems(addItems.filter((x) => x.id !== product.id));
    } else {
        setAddItems(
            addItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

     const handleDelete = (id) => {
    const newAdd = addItems.filter(item => item.id !== id);
    setAddItems(newAdd);
   }
  
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<Home onAdd={onAdd} products={products} />} />
         <Route path='/prodpage' element={<Prodpage onAdd={onAdd} onRemove={onRemove} addItems={addItems} />} />      
         <Route path='/basket' element={  <Basket products={products} addItems={addItems} onRemove={onRemove} onAdd={onAdd} handleDelete={handleDelete} />} />
         <Route path="/shipping" element={<Shipping />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/thanks" element={<Thanks />} />
         <Route path="/receipt" element={<Receipt />} />        
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;

  // const handleDelete = (id) => {
  //   const newAdd = goods.filter(good => good.id !== id);
  //   setGoods(newAdd);
  //  }

// import Receipt from './Pages/Receipt/Receipt';
// import Thanks from './Pages/Thanks/Thanks'
// import Payment from './Pages/Payment/Payment';
// import Shipping from './Pages/Shipping/Shipping'
// import React, { Component } from 'react
// import Products from './Components/Products/Products'
// import Auth from './Pages/Auth/Auth'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
// import {useEffect, useState} from 'react'
// import {useLocation} from 'react-router-dom'
// import Prods from './Components/Prods/Prods'
// import data from './Components/Data'
// import Basket from  './Components/Basket/Basket'
// import data from './././Components//'
// import Produvt2s1 from './Components/Product2s1/Produvt2s1'
// import data from './Components/Data'
// import Cart from './Pages/Cart/Cart';


// const {products} = data;
// const [cartItems, setCartItems] = useState([]);
// const onAdd = (product) => {
  //   const exist = cartItems.find(x => x.id === product.id);
  //   if (exist) {
    //     setCartItems(
//       cartItems.map((x) =>
//        x.id === product.id ? {...exist, qty: exist.qty + 1} : x
//       )
//     );
//   }else {
  //     setCartItems([...cartItems, {...product, qty: 1}]);
  //   }
  // };

// const onRemove = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
    //     setCartItems(
      //       cartItems.map((x) =>
      //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      //       )
      //     );
      //   }
      // };


      // {/* <Prods onAdd={onAdd} products={products}></Prods> */}
      //  {/* <Prodpage onAdd={onAdd} products={products}></Prodpage> */}
      //  {/* <Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}></Basket>  */}
      //  {/* <Products /> */}
      //  {/* <Produvt2s1 onAdd={onAdd} /> */}
      //  {/* <Prodpage onAdd={onAdd} addItems={addItems}/> */}
      // <Route path="/cart" exact component={Cart} />
        // {/* <Route path="/auth" exact component={Auth} /> */}
        // {/* <Route path="/shipping" exact component={Shipping} />
        // <Route path="/payment" exact component={Payment} />
        // <Route path="/thanks" exact component={Thanks} />
        // <Route path="/receipt" exact component={Receipt} />  */}