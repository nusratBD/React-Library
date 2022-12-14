import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';
const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
        const [meals, setMeals] = useState([]);
        useEffect(()=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res=>res.json())
            .then(data=>setMeals(data.meals));
        },[searchText]);
    const search = (e) =>{
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2>Find The Food You Want!</h2>
            <input onChange={search} type='text' name='' id=''></input>
            <h2>Available Meals: {meals.length}</h2>
            <div className='mealsContainer'>
                {
                    meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;