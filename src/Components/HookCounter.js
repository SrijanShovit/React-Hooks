import React,{useState} from 'react'

function HookCounter() {

    //useState is a function which takes initial value of state variable
    //returns  current value and a method to update state variable
    //the synatx below is of array destructring
    const [count,setCount] = useState(0)
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter

// 1.Call hooks at top level
//Don't call hooks inside loop,conditions or nested functions

//2.Call hooks from react functions
// Call them within React functional component and not just regular JavaScript functions

//initial value of state variable is never used on re-render
//setCount will update the count and re-render it