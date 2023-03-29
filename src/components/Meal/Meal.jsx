import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const {strMealThumb,strMeal,strArea}=props.food;
   const handelBtn=props.handelBtn;
  
    return (
        <div className='mealContainer'>
            <img src={strMealThumb} alt="" />
            <h4>Item Name:{strMeal}</h4>
            <h5>Item From:{strArea}</h5>
            
            <button onClick={()=>handelBtn(props.food)} className='btn-select'>
                Select
            <FontAwesomeIcon icon={faBowlFood} />
                </button>       
        </div>
    );
};

export default Meal;