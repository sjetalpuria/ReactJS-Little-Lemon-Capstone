import React, { Component } from 'react';
import logoLittle from '../assets/Little_lemon_logo.png';
import { Link } from "react-router-dom";

class Footer extends Component {
    render(){
        return (
            <div className='footerContainer'>
            <img className="imgFlex"src={logoLittle}/>   
             <ul className='footerList'>
                <li className='footerItem'>
                 <h2>Doormat Navigation</h2> 
                 <Link to="/" className="footerLink"> Home </Link>
                 <Link to="/about" className="footerLink"> About </Link>
                 <Link to="/menu" className="footerLink"> Menu </Link>
                 <Link to="/reservations" className="footerLink"> Reservations </Link>
                 <Link to="/order" className="footerLink"> Order Online </Link>
                 <Link to="/login" className="footerLink">  Login </Link>
                </li>
             </ul> 
             <ul className='footerList'>
                <li className='footerItem'>
                   <h2>Contact</h2> 
                 <Link to="/" className="footerLink"> Address </Link>
                 <Link to="/" className="footerLink"> Phone Number </Link>
                 <Link to="/" className="footerLink"> Email </Link>
                </li>
             </ul>
             <ul className='footerList'>
                <li className='footerItem'>
                    <h2>Social Media Links</h2>
                    <Link to="/" className="footerLink"> Address </Link>
                    <Link to="/" className="footerLink"> Phone Number </Link>
                    <Link to="/" className="footerLink"> Email </Link>
                </li>
              </ul> 
           </div>
            
        );
    }
}

export default Footer;