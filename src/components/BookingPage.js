import React from 'react';
import BookingForm from './BookingForm';


const BookingPage = (props) => {
    return (
     <div className='bookingContainer'>
        <h1 className='booking'> Booking Form</h1>
         <BookingForm availableTime={props.availableTime} 
                    dispatch={props.dispatch} submitForm={props.submitForm} />

     </div>
     );
};

export default BookingPage;