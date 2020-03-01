import React from 'react'


const TLItem = props => {
    const {item, items, index, setTodoItems} = props

    const handleButtonClick = () => {
        const itemsCopy = items.slice()
        itemsCopy.splice(index,1)
        setTodoItems(itemsCopy)
    }

    return (
        <li>
            {item} 
            <button onClick={handleButtonClick}>Mark as done</button>
        </li>
    )
}


export default TLItem