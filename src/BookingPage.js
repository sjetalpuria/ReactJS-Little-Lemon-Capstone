import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = (props) => {
    return (
         <BookingForm availableTime={props.availableTime} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
     );
};

export default BookingPage;