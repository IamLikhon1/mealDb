import React from 'react';
import './Item.css'

const Item = (props) => {
    const {strMeal,strMealThumb}=props.item
    
    return (
        <div className='item'>
            <h4>Item Name:{strMeal}</h4>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Item;