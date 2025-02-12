import { useEffect, useRef } from "react";
import { useState } from "react";

function StopWatch(){
    
    let [isRunning,setIsRunning] = useState(false)
    let [elapsedTime,setElapsedTime] = useState(0);
    let startTime = useRef(0)
    let intervalID = useRef(null)

    useEffect(()=>{
        if(isRunning){
        intervalID.current = setInterval(()=>{
            setElapsedTime(Date.now() - startTime.current)
        },10)
        }
        return ()=>{clearInterval(intervalID.current)}
    },[isRunning]);

    let Start = ()=>{
        setIsRunning(true);
        startTime.current = (Date.now() - elapsedTime);
    }

    let Stop = ()=>{
        setIsRunning(false);
    }

    let Reset = ()=>{
        setElapsedTime(0);
        setIsRunning(false);
    }
    
    let formatTime = ()=>{
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime/(1000)%60);
        let miliSeconds = Math.floor((elapsedTime%1000) / 10);
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliSeconds = String(miliSeconds).padStart(2,"0");
        return(`${minutes}:${seconds}:${miliSeconds}`)
    }
    return (
    <div className="StopWatch">
        <h1>StopWatch</h1>
        <div className="content">
        <div className="Time-container">
        <span>{formatTime()}</span>
        </div>
        <div className="Control-container">
            <button id="Start" onClick={Start}>Start</button>
            <button id="Stop" onClick={Stop}>Stop</button>
            <button id="Reset" onClick={Reset}>Reset</button>
        </div>
        </div>
        </div>);
}

export default StopWatch;