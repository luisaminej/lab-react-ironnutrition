import React,{useState} from 'react'

export default function SearchBar(props) {
    const[newFood, setNewFood] = useState('')
    const{filterFood} = props

    function handleSearch(event){
        setNewFood(event.target.value)

    }

    function handleOnSubmit(event){
        event.preventDefault();

        filterFood(newFood)

        setNewFood('')

    }
    

    return (
        <div>
            <form onSubmit={handleOnSubmit}>          
                <input type="text" name='newFood' placeholder="Search.." value={newFood} onChange={handleSearch} />
                <button type="submit">Search a Food</button>
                </form>
        </div>
    )
}
