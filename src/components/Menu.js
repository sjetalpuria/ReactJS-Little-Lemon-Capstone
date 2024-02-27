import React, { Component } from 'react'
import recipes from './recipes'


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
            
                <div className="cardContainer">
                 {
                    recipes.map(recipe =>
                        <div className="card" key={recipe.id}>
                            <img className="cardImg"  src={recipe.image}/>

                            <div className='containerFlex'> 
                                <h2>{recipe.title}</h2>
                                <h2>{recipe.price}</h2>
                            </div>
                            
                            <div>
                                <p>{recipe.description}</p>
                            </div>

                            <div className='containerFlex'>
                            <h3>{recipe.Order}</h3>
                            <img className="cardIcon" src={recipe.icon}/>
                            </div>
                        </div>)
                 }
                
                </div>
                
         
         </div>
      
    )
  }

export default Menu