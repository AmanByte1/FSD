import React from 'react';  

export default function IL({items}){

    return(
        <ul>
            {items.map((item)=>
            <li>
                {item.name} - ${item.price}
            </li>)}
        </ul>
    )
}