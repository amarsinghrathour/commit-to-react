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
<p>
    Check Your Console - I log on Mount/Unmount 😎
</p>
    );
}


export default EffectDemo;