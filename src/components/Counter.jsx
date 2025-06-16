import { useState,useEffect } from "react";


function Counter(){

  //using local storage with useEffect to persist the count
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved !== null ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

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