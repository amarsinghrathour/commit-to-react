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
      <div className="flex flex-col items-center space-y-4">
      <p className="text-xl font-semibold">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Reset
        </button>
      </div>
    </div>

    );

}

export default Counter;