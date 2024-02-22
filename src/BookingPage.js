import React, { Component} from 'react';
import BookingForm from './BookingForm.js';

class BookingPage extends Component {
    render(){
        return (
           <div>
            <h1>Booking page</h1>
            <BookingForm/>
           </div>
        );
    }
}
export default BookingPage;