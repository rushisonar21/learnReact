import { useState } from "react";
import PropTypes from 'prop-types'

function Food(props){
    let food_list = props.item_list
    let [foods,setFoods] = useState(food_list)

    let add_food_handler = ()=>{
        let new_food = document.querySelector("#newFood")
        setFoods(f=>[...f,new_food.value])
    }

    let remove_food_handler = (index)=>{
        setFoods(foods.filter((_,i) => i!==index));
    }

    return(<>
    <p>Food List</p>
    <ul className="foodList">
        {
            foods.map((food,index)=>{
            return(<li key={index} onClick={()=>remove_food_handler(index)}>{food}</li>)
        })
        }
    </ul>
    <input id="newFood" type="text" placeholder="Enter Food Name"></input>
    <button onClick={add_food_handler}>Add Food</button>
    </>);
}
Food.propTypes = {
    item_list : PropTypes.array,
}
export default Food;