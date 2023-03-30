import React from 'react';
import './Item.css'

const Item = (props) => {
    const {strMeal}=props.item
    
    return (
        <div className='item'>
            <h4>Item Name:{strMeal}</h4>
        </div>
    );
};

export default Item;