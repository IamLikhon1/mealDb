import React from 'react';
import Item from '../Show/Item';
import './Order.css'

const Order = ({items}) => {
    // console.log(items);
    return (
        <div className='order'>
            <h2>Order Review</h2>
            <h3>Select 3 Only!!!</h3>
            <h3>Selected:{items.length}</h3>
            {
                items.map(item=><Item
                item={item}
                key={item.idMeal}
                ></Item>)
            }
        </div>
    );
};

export default Order;