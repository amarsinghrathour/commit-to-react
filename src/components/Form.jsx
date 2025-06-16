import { useState } from "react";

function Form(){

  const [name, setName]=useState('');
  
  const handleSubmit = (e)=>{
    //prevents default form submit behaviours
   e.preventDefault();
   alert(`Hello ,${name} !`);
   setName(''); // clear the input after submit
  };

  return (
    <form onSubmit={handleSubmit}> 
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name"/>
    </form>
  )


}

export default Form;