import { useState } from "react";


function MyComponent(props){
    let prop_name = props.name
    let [name, setName] = useState("Guest");
    let [isStudent, setIsStudent] = useState(false);
    return(
    <div>
        <p>Name: {name}</p>
        <button onClick={()=>{
            setName(prop_name)
        }}>Update Name</button>
        <p>is Student: {isStudent ? "Yes":"No"}</p>
        <button onClick={()=>{
            setIsStudent(!isStudent)
        }}>Toggle Student Status</button>
    </div>);
}

export default MyComponent