import React, { Component } from 'react'
import recipes from './recipes'
import card1 from './assets/greek_salad.png';
import card2 from './assets/bruchetta.png';
import card3 from './assets/lemon.png';

const Menu = ()=> {
    return (
    
        <div>
            <div className='mainContainer'>
                <div className='mainContent'>
                    <h1> This weeks Specials! </h1> 
                </div>

            <div>
                <button> Online Menu</button>
            </div>
            </div>

           { /*<div className='cardContainer'>
                <div className="card">
                <img className="cardImg"src={card1} alt="Avatar" />

                <div class="container">
                <div>
                    <h2>Greek Salad</h2>             
                </div>

                    <div>
                    <h2>$12.99</h2>
                    </div>
                </div>


                <div class="container">
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                
                </div>

                <div class="container">
                <div>
                    <h3>Order a Delivery</h3>             
                </div>

                </div>

                </div>

                <div className="card">
                <img className="cardImg"src={card2} alt="Avatar" />

                <div class="container">
                <div>
                    <h2>Bruschetta</h2>             
                </div>

                    <div>
                    <h2>$5.99</h2>
                    </div>
                </div>


                <div class="container">
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <br/>
                <br/>
                </div>

                <div class="container">
                <div>
                    <h3>Order a Delivery</h3>             
                </div>
                    
                </div>

                </div>

                <div className="card">
                <img className="cardImg"src={card3} alt="Avatar" />

                <div class="container">
                <div>
                    <h2>Lemon Dessert</h2>             
                </div>

                    <div>
                    <h2>$5.00</h2>
                    </div>
                </div>


                <div class="container">
                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                
                </div>

                <div class="container">
                <div>
                    <h3>Order a Delivery</h3>             
                </div>
                </div>

                </div>
            </div> */}

            
                <div className="card">
                 {
                    recipes.map(recipe =>
                        <div key={recipe.id}>
                            <img className="cardImg"  src={recipe.image}/>

                            <div className='containerFlex'> 
                                <h2>{recipe.title}</h2>
                                <h2>{recipe.price}</h2>
                            </div>
                            
                            <div>
                                <p>{recipe.description}</p>
                            </div>
                        </div>)
                 }
                </div>
                
         
         </div>
      
    )
  }

export default Menu