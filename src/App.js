import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Receipt from './Pages/Receipt/Receipt';
import Thanks from './Pages/Thanks/Thanks'
import Payment from './Pages/Payment/Payment';
import Shipping from './Pages/Shipping/Shipping'
import Cart from './Pages/Cart/Cart';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,} from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
import Prodpage from './Pages/Prodpage/Prodpage'
import Auth from './Pages/Auth/Auth'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import {useEffect, useState} from 'react'
// import {useLocation} from 'react-router-dom'

function App() {

// const location = useLocation();
// const [show, setShow] = useState(false) ;
// useEffect(() => {
//   console.log(location.pathname)
//   if(location.pathname === '/receipt') setShow(true)
// },[location])

// console.log(show)

  return (
    <Router>
      <div className="App">
       
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/prodpage" exact component={Prodpage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/shipping" exact component={Shipping} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/thanks" exact component={Thanks} />
        <Route path="/receipt" exact component={Receipt} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
