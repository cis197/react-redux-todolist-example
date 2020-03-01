import React, {useState} from 'react'

import Title from './Title'
import TLContainer from './TLContainer'
import Composer from './Composer'

const App = () => {
    const [todoItems, setTodoItems] = useState([
        'HW',
        'Buy groceries'
    ])
    return (
        <>
            <Title/>
            <TLContainer items={todoItems} setTodoItems={setTodoItems}/>
            <Composer items={todoItems} setTodoItems={setTodoItems}/>
        </>
    )
}

export default App