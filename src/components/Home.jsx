import React from 'react'
import Header from './Header';
import About from './About';
import Shop from './Shop';
import Navbar from './Navbar';
import Menu from './Menu';
import Clients from './Clients';
import Order from './Order';
import Prices from './Prices';
const Home = () => {
  return (
     <>
       <Header />
         <About/>
         <Shop/>
         <Menu/>
         <Clients/>
         <Order/>
         <Prices/>
         
     </>
  )
}

export default Home;