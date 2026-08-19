import React,{useState} from 'react';

export default function M(){

    const[isDark,setIsDark]=useState(true);

    return(
        <div style={{
            minHeight: '100vh',
            padding: '30px',
            background: isDark ? '#000' : '#fff',
            color: isDark ? '#fff': '#333',

        }}>

            <p>Active View Mode</p>
            <button onClick={()=>setIsDark(!isDark)}>

            </button>

            </div>
    );

}