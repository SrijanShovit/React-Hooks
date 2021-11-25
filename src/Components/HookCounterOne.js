import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    //the parameter is a function which executes every time when component is rendered
    //useEffect is placed inside component so its state and props can easily be handled
    useEffect(()=> {
        console.log("Updating document title")
        document.title = `Clicked ${count} times`
        //useEffect takes second argument as a dependency array which takes state or peops
        //which need to be watched and run useEffect only when that is updated
    },[count])
    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={e => 
                    setName(e.target.value)
                }
                />
            <button onClick={()=> setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterOne
