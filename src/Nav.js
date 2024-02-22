import React, { Component} from 'react';
import { Link } from "react-router-dom";
import logoLittle from './assets/Little_lemon_logo.png';
class Nav extends Component {
    render(){
        return (
         <nav>
           
           <div className='navContainer'>
            <img className="imgFlex"src={logoLittle}/>   
             <ul className='navList'>
                <li className='navItem'>
                 <Link to="/" > Home </Link>
                </li>

                <li>
                 <Link to="" > About </Link>
                </li>

                <li>
                 <Link to=""> Menu </Link>
                </li>

                <li>
                 <Link to=""> Reservations </Link>
                </li>

                <li>
                 <Link to="" > Order Online </Link>
                </li>

                <li>
                 <Link to="" >  Login </Link>
                </li>
              </ul> 
           </div>
           
         </nav>
        );
    }
}

export default Nav;