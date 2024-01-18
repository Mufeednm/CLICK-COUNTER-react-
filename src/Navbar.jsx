import { useState } from "react";
function Navbar(){
    const [count,setCount]=useState(0)
    
    const addCount=()=> {setCount(count+1)}
    
    return(
        <div  className="Navbar">
            <h1>CLICK COUNTER</h1>
     <button onClick={addCount} >click</button>
     <h2>{count}</h2>
        </div>
    )
}export default Navbar