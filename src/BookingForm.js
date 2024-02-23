import React, { useState} from 'react';

const BookingForm = (props) => {
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [guests,setGuests] = useState("");
    const [occassion,setOccassion] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        props.SubmitForm(e); //
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e); //
    }
        return (
            // <form style="display: grid; max-width: 200px; gap: 20px">
            <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e)=>setTime(e.target.value)} required/>
           
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={(e)=> handleChange(e.target.value)}>
               <option value="">Select a Time</option>
               {
                props.availableTime.availableTime.map(availableTime =>{
                    return<option key={availableTime}>{availableTime}</option>
                })
               }
               
            </select>
           
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)}/>
            
            <label for="occasion">Occasion</label>
            <select id="occasion" key={occassion} value={occassion} onChange={e => setOccassion(e.target.value)}>
               <option>Birthday</option>
               <option>Anniversary</option>
            </select>
           
            <input type="submit" value="Make Your reservation"/>
         </form>
        );
    }
export default BookingForm;