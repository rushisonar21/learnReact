import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
function ComponentA(){

    let [user,setUser] = useState("Rushi")
    return (
        <div className="box">
            <h1>ComponentA</h1>
            <p>Hi {user}</p>
            <UserContext.Provider value={user}>
            <ComponentB/>
            </UserContext.Provider>
            
        </div>
    );
}

export default ComponentA;