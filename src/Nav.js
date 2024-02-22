import React, { Component, useState} from 'react';
import { Link } from "react-router-dom";
import logoLittle from './assets/Little_lemon_logo.png';
const Nav =() => {
  {
    const [mobMenu,setmobMenu] = useState("false");
    
    const switchMenu = () =>{
      setmobMenu(!mobMenu);
    }



     return (
         <nav>
            <div className={`navContainer ${mobMenu ? "open" : ""}`}>
            <a href='/'>
              <img className="imgFlex" src={logoLittle}/> 
            </a>
          {/* Mobile Nav */}
          <div className='menuIcon' onClick={switchMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>

           {/* Desktop Nav */}
          
             <ul className={`navList ${mobMenu ? "visible" : ""}`}>
                <li> <Link to="/" > Home </Link> </li>

                <li> <Link to="/" > About </Link> </li>

                <li> <Link to="/"> Menu </Link> </li>

                <li> <Link to="/"> Reservations </Link> </li>

                <li> <Link to="/" > Order Online </Link> </li>

                <li> <Link to="/" >  Login </Link> </li>
              </ul> 
           </div>
           
         </nav>
        );
    }
}

export default Nav;