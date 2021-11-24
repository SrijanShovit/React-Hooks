import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)

    //the parameter is a function which executes every time when component is rendered
    //useEffect is placed inside component so its state and props can easily be handled
    useEffect(()=> {
        document.title = `Clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterOne
