import React from 'react';
import { Link } from "react-router-dom";
import headerImage from './assets/restauranfood.jpg'


const Header =() => {
     return (
      <div>
          <div className='headerContainer'>
            <div className='headerContent'>
             <h1>Little Lemon</h1>
             
             <h2>Chicago</h2>
             
             <p>We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist. </p>

             <button><Link to="/booking">Reserve a Table</Link></button>
            </div>

            <div>
                <img className="headerImage" src={headerImage} alt="Banner"/>
            </div>
           
          </div>

       
      </div>
        )
    }


export default Header;