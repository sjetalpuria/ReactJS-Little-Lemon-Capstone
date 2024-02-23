import React, {useReducer } from 'react';
import Header from './Header.js';
import confirmBooking from './confirmBooking';
import BookingPage from './BookingPage'
import {Route, Routes, useNavigate} from 'react-router-dom';

const Main = () => {
    //
    const seedRandom = function (seed)
    {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;

        return function()
        {
            return (s=s*a % m)/m;
        }
    }
    const fetchAPI = function (date)
    {
        let result = [];
        let random = seedRandom(date.getDate());
        for(let i=17; i<=23;i++)
        {
            if(random()<0.5)
            {
                result.push(i+":00");
            }

            if(random() > 0.5)
            {
                result.push(i+":30");
            }
        }
        return result;
    }
    const submitAPI = function(formData)
    {
        return true;
    }
    const originalState = {availableTime: fetchAPI (new Date())};
    const[state,dispatch] = useReducer(updatedTime, originalState);

    function updatedTime(state,date)
    {
        return {availableTIme:fetchAPI(new Date())}
    }

    const navigate = useNavigate()
     function SubmitForm(formData)
     {
        if (submitAPI(formData))
        {
            navigate("/confirmed")
        }
     }
     //
        return (
          <div>
                <Routes>
                <Route path="/" element={<Header/>}></Route>
               {/*
                <Route>About</Route>
                <Route>Menu</Route>
                <Route>Reservations</Route>
                <Route>Order</Route>
                <Route>Login</Route>*/
               } 
                <Route path='/booking' element={<BookingPage
                                                availableTime={state}
                                                dispatch={dispatch}
                                                submitForm={SubmitForm}/>}/>

                <Route path ="/confirmed" element={<confirmBooking/>}></Route>
               </Routes>
              
          </div>
           
        )
    }


export default Main;