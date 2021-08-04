import React, { useState } from 'react'

export default function AddFood(props) {
    const { addFoodHandler } = props

    const food = {}

    const [newFood, setNewFood] = useState( food )

    function handleChange(event) {
        setNewFood({
            ...newFood,
            [event.target.name]: event.target.value
        })
    }

    function handleOnSubmit(event) {
        event.preventDefault()

        addFoodHandler(newFood)
        setNewFood(food)
    }



    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={newFood.name} onChange={handleChange} />
                <label>Calories:</label>
                <input type="text" name="name" value={newFood.calories} onChange={handleChange} />
                <label>Image:</label>
                <input type="url" name="image" value={newFood.image} onChange={handleChange} />
                <button type="submit">Add a Food</button>
            </form>
        </div>
    )
}
