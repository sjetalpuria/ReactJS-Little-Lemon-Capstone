import React, {useReducer, useEffect } from 'react';
import Header from './Header';
import ConfirmBooking from './ConfirmBooking';
import BookingPage from './BookingPage'
import {Route, Routes, useNavigate} from 'react-router-dom';

const Main = () => {
    //
    const seedRandom = function(seed)
    {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;

        return function()
        {
            return (s=s*a%m)/m;
        };
    }
    const fetchAPI = function(date)
    {
        let result = [];
        let random = seedRandom(date.getDate());
        for(let i=17; i<=23;i++)
        {
            if(random()< 0.5)
            {
                result.push(i+":00");
            }

            if(random() < 0.5)
            {
                result.push(i+":30");
            }
        }
        return result;
    }; 

    const submitAPI = function(formData)
    {
        return true;
    };
    const originalState = {availableTime: fetchAPI(new Date())};
    const[state,dispatch] = useReducer(updatedTime, originalState);

    function updatedTime(state,date)
    {
        return {availableTime:fetchAPI(new Date(date))}
    }

    const navigate = useNavigate();
     function submitForm(formData)
     {
        if (submitAPI(formData))
        {
            navigate("/confirmed");
        }
     }
     //
        return (
          <main>
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
                                                submitForm={submitForm}/>}/>

                <Route path ="/confirmed" element={<ConfirmBooking />}></Route>
               </Routes>
              
          </main>
           
        )
    }


export default Main;