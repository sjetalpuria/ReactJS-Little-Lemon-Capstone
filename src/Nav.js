import React, { Component} from 'react';
import { NavLink } from "react-router-dom";
import logoLittle from './assets/Little_lemon_logo.png';
class Nav extends Component {
    render(){
        return (
         <nav>
           
           <div className='navContainer'>
            <img className="imgFlex"src={logoLittle}/>   
             <ul className='navList'>
                <li className='navItem'>
                 <NavLink to="/" className="navLink"> Home </NavLink>
                </li>

                <li>
                 <NavLink to="/about" className="navLink"> About </NavLink>
                </li>

                <li>
                 <NavLink to="/menu" className="navLink"> Menu </NavLink>
                </li>

                <li>
                 <NavLink to="/reservations" className="navLink"> Reservations </NavLink>
                </li>

                <li>
                 <NavLink to="/order" className="navLink"> Order Online </NavLink>
                </li>

                <li>
                 <NavLink to="/login" className="navLink">  Login </NavLink>
                </li>
              </ul> 
           </div>
           
         </nav>
        );
    }
}

export default Nav;