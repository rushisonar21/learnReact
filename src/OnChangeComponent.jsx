import { useState } from "react";

function OnChangeComponent(){
    let [name,setName] = useState()
    let [quantity, setQuantity] = useState(0)
    let [payment, setPayment] = useState("cash")
    let [deliveryMethod, setDeliveryMethod] = useState()
    let [orderStatus, setOrderStatus] = useState(false)

    let updatePayment = (e)=>{
        setPayment(e.target.value)
    }
    let updateDeliveryMethod = (e)=>{
        setDeliveryMethod(e.target.value)
    }
    return(
        <div>
            <input placeholder="Enter Item Name" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></input>
            <input type="number" value={quantity} onChange={(e)=>{
                setQuantity(e.target.value)
            }}></input>
            <select value={payment} onChange={updatePayment}>
                <option>cash</option>
                <option>gpay</option>
                <option>card</option>
            </select>
            <br></br>
            <label for="pickup">
            <input type="radio" name="deliveryMethod" id="pickup" value="pick up" checked={deliveryMethod==="pick up"} onChange={updateDeliveryMethod}></input>
            pickup
            </label>
            <label for="homedelivery">
            <input type="radio" name="deliveryMethod" id="homedelivery" value="home delivery" checked={deliveryMethod==="home delivery"} onChange={updateDeliveryMethod}></input>
            homeDelivery
            </label>
            <br>
            </br>
            <button onClick={()=>{
                setOrderStatus(true)
            }}>Order</button>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Payment Method: {payment}</p>
            <p>Delivery Method: {deliveryMethod}</p>
            <p>{orderStatus ? "ordered":"please order"}</p>
        </div>
    )
}
export default OnChangeComponent