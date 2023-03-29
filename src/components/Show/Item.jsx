import React from 'react';
import './Item.css'

const Item = (props) => {
    const {strMeal}=props.item
    
    return (
        <div className='item'>
            <h3>Item Name:{strMeal}</h3>
        </div>
    );
};

export default Item;