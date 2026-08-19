// import React from 'react';
import React,{useState} from 'react';


export default function LI(){
    const[text,setText]=useState('');

    return(
        <div style={{padding:'20px'}}>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            <h3>{text}  </h3>
        </div>


    );





}