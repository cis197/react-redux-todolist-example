import React, {useState} from 'react'

const Composer = props => {
    const [inputValue, setInputValue] = useState('')

    const {items, setTodoItems} = props


    const handleButtonClick = () => {
        const copy = items.slice()
        copy.push(inputValue)
        setTodoItems(copy)
    }

    return (
        <>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text"/>
            <button onClick={handleButtonClick}>Add button</button>
        </>
    )
}

export default Composer