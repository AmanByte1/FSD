import React,{useState,useEffect} from 'react';

export default function LT(){
    const [seconds,setSeconds]=useState(0);


    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },10000) ;

        return ()=>clearInterval(intervalId);


    },[]);

    return <h1>Time Active:{seconds}s</h1>;
}