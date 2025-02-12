import { useState } from "react";

function ColorPicker(){
    
    let [color,setColor] = useState("#FFFFFF");

    let colorUpdater = (e)=>{
        setColor(e.target.value)
    };
    return (
    <div className="color-picker">
        <div className="color-display-container" style={{backgroundColor: color}}>
            <p>selected color: {color}</p>
        </div>
        <div className="color-select-container">
                <p>Select Color</p>
                <input type="color" value={color} onChange={colorUpdater}></input>
            </div>
    </div>  
    );
}
export default ColorPicker;