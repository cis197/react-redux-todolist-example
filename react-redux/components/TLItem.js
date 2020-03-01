import React from 'react'
import { connect } from 'react-redux'


const TLItem = props => { 
    const {
        item,
        index,
        removeItemFromList
    } = props
    return (
        <li>
            {item} 
            <button onClick={() => removeItemFromList(index)}>
                Mark as done
            </button>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItemFromList : index => dispatch({
            type: 'REMOVE_ITEM',
            index
        })
    }
}

export default connect(null, mapDispatchToProps)(TLItem)