import React from 'react'
import {connect} from 'react-redux'

import TLItem from './TLItem'

const TLContainer = props => {
    const {reduxItems} = props
    console.log(reduxItems)
    return (
        <ul>
            {
                reduxItems.map((item, index) => <TLItem item={item} index={index}/>)
            }
        </ul>
    )
}

const mapReduxStateToProps = state => {
    return {
        reduxItems: state
    }
}

export default connect(mapReduxStateToProps)(TLContainer)