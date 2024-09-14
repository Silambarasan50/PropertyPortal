import React from 'react'
import { useState } from 'react';
import './Header.css';
const Header = () => {
    const [count,setcount]=useState(100);
    function incrementCount()
    {
        setcount(count => count+1)
    }
    function decrementCount()
    {
        setcount(count => count-1)
    }
  return (
    <header>
        <h1>hello</h1>
        <button onClick={incrementCount}>+</button>
        <p>{count}</p>
        <button onClick={decrementCount}>-</button>
        
    </header>
   
  )
}

export default Header