import React, {useState} from 'react'
import {connect} from 'react-redux'

const Composer = props => {
    const [inputValue, setInputValue] = useState('')

    const {addTodoItem} = props

    return (
        <>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text"/>
            <button onClick={() => addTodoItem(inputValue)}>Add button</button>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoItem: newItem => dispatch({type: 'ADD_TODO_ITEM', todoItem: newItem})
    }
}

export default connect(null, mapDispatchToProps)(Composer)