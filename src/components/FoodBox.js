import React from 'react'
import 'bulma/css/bulma.css'
import foodData from '../foods.json'

export default function FoodBox(props) {

    const {name, calories, image} = props
    return (
        < >
        <div>
            <img src={image} />
        </div>
        <div>
            <p>{name}</p>
            <p>{calories}</p>
        </div>
        <div>
            <button className="button is-info">+</button>
        </div>
        </>
    )
}
