import React,{useState} from 'react';

export default function SC(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);

    }
    return(
        <>
        <h2>
            {count}
            <button onClick={increment}>+</button>
        </h2>
        </>
    )
}