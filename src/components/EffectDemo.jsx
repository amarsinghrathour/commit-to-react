import { useEffect } from "react";
//useEffect 101 (on mount)
function EffectDemo(){

    useEffect(()=>{
    console.log("Component Mounted");

    return ()=>{
        console.log("Component UnMounted");
    };
    },[]);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
<h1>Check Your Console - I log on Mount/Unmount 😎</h1>
    </div> 

    );
}


export default EffectDemo;