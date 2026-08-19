import React,{useState} from 'react';

export default function SP(){
    const [isLoggedIn,setIsLoggetIn]=useState(false);

    return(
        <div>
            {isLoggedIn ?(
                <>
                <h2>
                    welcome 
                </h2>
                <button onClick={()=> setIsLoggetIn(false)}>Log Out</button>
                </>
            ):(
                <>
                <h2>Access Denied
                    </h2>
                    <button onClick={()=>setIsLoggetIn(true)}>Log In</button>
                    </>
            )}
        </div>
    );

}