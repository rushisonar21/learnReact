import { useEffect, useState } from "react"

function WindowHeightWidth(){

    let [width,setWidth] = useState(window.innerWidth)
    let [height,setHeight] = useState(window.innerHeight)

    let updateResize = ()=>{
        setWidth(w=>window.innerWidth);
        setHeight(h=>window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize",updateResize)
    },[])
    
    return(<div>
    <p>Window width is {width}px</p>
    <p>Window Height is {height}px</p>
    </div>)
}
export default WindowHeightWidth