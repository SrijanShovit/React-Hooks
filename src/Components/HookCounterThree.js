import React,{useState} from 'react'
//actually setState merges the old and new states automatically but
//useState does not do so so chnage in firstName will cause removal of lastName
//and vice versa
//so spread operator is used and changing variable is overridden

function HookCounterThree() {

    const [name,setName] = useState({firstName : '', lastName : ''})
    return (
        <div>
            <form>
                <input type="text"
                value={name.firstName}
                //just make a replica of name object and only update firstName variable
                onChange={e=>setName({...name,firstName : e.target.value})}
                />
                <input type="text"
                value={name.lastName}
                //just make a replica of name object and only update lastName variable
                onChange={e=>setName({...name,lastName : e.target.value})}
                />
               
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
