import { useEffect } from "react";
import { useState } from "react";

function DigitalClock(){

    let [time,setTime] = useState(new Date)
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date)
        },1000)
        return ()=>{
            clearInterval(intervalId);
        }
    },[])

    let formatTime = ()=>{
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let meridian = hour>12 ? "PM":"AM" ;
        hour = hour%12 || 12;
        return (`${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridian}`)
    }

    let padZero = (value)=>{
        return (value<10 ? "0" : "") + value
    }
    return (
        <div className="digital-clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock