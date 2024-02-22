import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage'
import {Route, Routes} from 'react-router-dom';

class Main extends Component {
    render(){
        return (
          <div>
                <Routes>
                <Route path="/">Home</Route>
                <Route>About</Route>
                <Route>Menu</Route>
                <Route>Reservations</Route>
                <Route>Order</Route>
                <Route>Login</Route>
                <Route path='/booking' element={<BookingPage/>}/>
               </Routes>
           <Header/>
           <Footer/>
          </div>
           
        )
    }
}

export default Main;