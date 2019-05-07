import React, { Component } from 'react';

function Itemlisttodo({itemtodo,toggle,id,remove})
{
    return (
        <div className='itemtodo-app'>
        <ul>
                 <li>
                     <span onClick={()=>toggle(id)}
                     style={{textDecoration:itemtodo.isDone?"line-through":"none"}}>{itemtodo.text}</span>
                     <button style={{marginLeft:'5%'}} onClick={()=>remove(id)}>remove</button>
                 </li>
             </ul>
        </div>
    )
}
export default Itemlisttodo