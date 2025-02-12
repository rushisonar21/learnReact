import React,{useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD(){
    const user = useContext(UserContext)
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <p>Bye {user}</p>
        </div>
    );
}

export default ComponentD;