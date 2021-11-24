import React,{useState} from 'react'

function HookCounterFour() {
    const [items,setItems] = useState([])
    const addItem = () => {
        setItems([...items,{
            id: items.length,
            //Ay random no. b/w 1 to 10
            value : Math.floor(Math.random() *10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a no.</button>
            <ul>
                {
                    items.map(item =>(
                        //array of objects
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterFour


