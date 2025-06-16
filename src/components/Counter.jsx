import { useState } from "react";


function Counter(){

    const [count,setCount]=useState(0);
const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};
    return (
     <div>
        <p>count {count}</p>
        <button onClick={()=>setCount(count+1)} > Increment </button>
        <button onClick={() => decrement()}> Decrement </button>
        <button onClick={()=>setCount(0)}>Reset</button>
     </div>

    );

}

export default Counter;