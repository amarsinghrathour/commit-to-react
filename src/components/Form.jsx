import { useState } from "react";

function Form(){

  const [name, setName]=useState('');

  const [submittedName,setSubmittedName]=useState(()=>{
    return localStorage.getItem('name') || '';
  });

  //error

  const [error,setError]=useState('')
  
  const handleSubmit = (e)=>{
    //prevents default form submit behaviours
    e.preventDefault();
    
    if (name.trim() === ''){
      setError('Name cannot be empty 🤨');
      return
    }
    setSubmittedName(name); 
    localStorage.setItem('name', name); //set name to local storage
   setName(''); // clear the input after submit
  };

  const handleLogout =()=>{
    localStorage.removeItem('name');
    setSubmittedName('');
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
    {!submittedName ?(
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"> 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Hello, {submittedName} 👋</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
   )}
    </div>
   
  )


}

export default Form;