import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
import './Products.css'
import swal from 'sweetalert';


const Products = () => {
    const [foods, setFoods]=useState([]);
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res=>res.json())
        .then(date=>setFoods(date.meals))
    },[]);
    const handelBtn=(food)=>{
        const exit= items.find(item=>item.idMeal==food.idMeal)
        if(exit){
           return swal("Error!", "You clicked the button twice!", "error");
        }
       const newItem=[...items,food]
       setItems(newItem)
    }
    return (
        <div className='MainContainer'>
           <div className='productContainer'>
        {
            foods.map(food=><Meal 
            food={food}
            key={food.idMeal}
            handelBtn={handelBtn}
            ></Meal>)
        }
           </div>
           <div className='orderReview'>
                <Order items={items} ></Order>
           </div>

        </div>
    );
};

export default Products;