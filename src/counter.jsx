import { useState } from "react";

export default function Counter() {

    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount)
    }

    const [count,setCount]=useState(0);

    const counterStyle={
        border:'2px solid red',
        borderRadius:'10px'
    }
  return (
    <div style={counterStyle}>
      <h4>Count:{count}</h4>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
