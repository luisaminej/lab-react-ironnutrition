import React, {useState} from 'react'
import FoodBox from './FoodBox'
import AddFood from './AddFood'
import SearchBar from './SearchBar'
import foodData from '../foods.json'


export default function FoodList() {
    const [theFood, setTheFoods] = useState( foodData )


    function addFood(newFood){
        const upDatedFood = [ newFood, ...theFood ]
        setTheFoods(upDatedFood)
    }

    const filterFood = (query) => {
        if (!query) {                  
            setTheFoods(foodData)
            return 
        }

        const filteredArrayFoods = theFood.filter((food) =>{
            const foodName = food.name.toLowerCase();
            return foodName.includes(query);
        }
        );

        setTheFoods(filteredArrayFoods)
    }



    return (
        <div>
           <div className="App-header">
        <h1>IronNutrition</h1>
        </div>
        <div>
        <SearchBar
            filterFood={filterFood}
        />    
        <AddFood 
            addFoodHandler={addFood} 
        />
        {theFood.map(food=>
            <FoodBox
            key={food.name}
            name={food.name}
            image={food.image}
            calories={food.calories}
            />
        )}            
        </div> 
        </div>
    )
}
