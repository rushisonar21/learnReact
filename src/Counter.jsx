import { useEffect, useState } from "react";

function Counter(){
    let [count, setCount] = useState(0)
    let [color, setColor] = useState("green")
    let increment = ()=>{
        // setCount(count+1)
        // setCount(count+1)
        //  this is without updater func this will update if multiple updation are thier simultensously (result of above increment 1 only not 2), hence no change for that we need to write updater function in which it takes the latest value in each and then updated like below
        setCount(c=>c+1);
        setCount(c=>c+2);
        //result of this increment by 3 as thier are 2 time setcount with updater function
        
    }

    let decrement = ()=>{
        setCount(c=>c-1);
    }

    let reset = ()=>{
        setCount(0)
    }
    let changeColor = ()=>{
        setColor(c=>c==="green" ? "blue" : "green")
    }
    //useEffect => React hook that tells React to run this Code when(rerenders,mount,mount+rerender)
    //useEffect(()=>{})     //runs after every re-render(irrespective of componnent)
    //useEffect(()=>{},[]) //runs only when componenent mounts
    //useEffect(()=>{},[value1,value2]) //runs one mount and when given dependency component rerun
    let a = useEffect(()=>{
        document.title = `Count is ${count}, ${color}`
    },[count,color])
    //here title changes on change of count and color both if u remove color then it will only change for mount and rerender of count
    return(
        <div className="Counter">
        <p style={{color: color}}>{count}</p> 
        <div className="buttondiv">
        <button onClick={increment} id="increment">increment</button>
        <button onClick={decrement} id="decrement">decrement</button>
        <button onClick={reset} id="reset">reset</button>
        <button onClick={changeColor}>color change</button>
        </div>
        </div>
    );
}
export default Counter