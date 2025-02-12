import { useState } from "react";

function Car(){
    let [car, setCar] = useState({"Year":2024,
                                  "Make": "Lamborgini",
                                  "Model": "Urus"
    })

    let update_year = (e)=>{
        setCar(c=>({...c,Year : e.target.value}))
    }
    let update_make = (e)=>{
        setCar(c=>({...c,Make : e.target.value}))
    }
    let update_model = (e)=>{
        setCar(c=>({...c,Model : e.target.value}))
    }
    // ...car is called object spreading basically it will look in behind th scenes like setCar({"Year":2024,"Make":"Lamborgini","Model":"Urus","Year":2025})
    //and by default it takes the latest value therefore the year will get updated to latest value of input

    return(<div>
        <p>My Favaourite Car is: {car.Year} {car.Make} {car.Model}</p>
        <input type="number" value={car.Year} onChange={update_year}></input>
        <input type="text" value={car.Make} onChange={update_make}></input>
        <input type="text" value={car.Model} onChange={update_model}></input>
    </div>);
}
export default Car