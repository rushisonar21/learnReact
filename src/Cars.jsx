import { useState } from "react";

function Cars(){
    let [cars, setCars] = useState([]);
    let [carYear, setCarYear] = useState(new Date().getFullYear());
    let [carMake, setCarMake] = useState();
    let [carModel, setCarModel] = useState();

    let addCar = (e) =>{
        let newCar = {"Year":carYear,
                      "Make": carMake,
                      "Model":carModel
                    }
        setCars(c => [...c,newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    let removeCar = (index) =>{
        setCars(cars.filter((ele,i)=>i!==index))
    }
    let UpdateYear = (e)=>{
        setCarYear(e.target.value)
    }

    let UpdateMake = (e)=>{
        setCarMake(e.target.value)
    }

    let UpdateModel = (e)=>{
        setCarModel(e.target.value)
    }
    return (
        <div className="Cars">
            <h1>Cars</h1>
            <ul className="car-list">
                {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>{car.Year} {car.Make} {car.Model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={UpdateYear}></input><br/>
            <input type="text" value={carMake} placeholder="Enter Car Make" onChange={UpdateMake}></input><br/>
            <input type="text" value={carModel} placeholder="Enter Car Model" onChange={UpdateModel}></input><br/>
            <button onClick={addCar}>Add Car</button>
            

        </div>
    );
}
export default Cars