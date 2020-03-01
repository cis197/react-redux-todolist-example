import React from 'react'
import {connect} from 'react-redux'

import TLItem from './TLItem'

const TLContainer = props => {
    const {items, setTodoItems} = props
    return (
        <ul>
            {
                items.map((item, index) => <TLItem item={item} items={items} setTodoItems={setTodoItems}/>)
            }
        </ul>
    )
}

export default TLContainer