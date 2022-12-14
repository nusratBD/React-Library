import React from 'react';
import './Meal.css';
const Meal = (props) => {
    const {strMealThumb, strMeal, strInstructions} = props.meal;
    console.log(props);
    return (
        <div className='meal'>
            <img src={strMealThumb} alt=''></img>
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button>Add This Food</button>
        </div>
    );
};

export default Meal;