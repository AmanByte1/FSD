import React,{useState,useEffect} from 'react';

export default function UF(){
    const[data,setData]=useState(null);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((result)=>{
            setData(result);
            setLoading(false);
        })
        .catch(()=>{
            setLoading(false);
        });
    })
    return(data,loading)
}

