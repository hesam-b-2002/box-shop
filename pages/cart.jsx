import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../action/actions";



 export const Cart=()=>{

    const cartItems=useSelector((state)=>state.cart)
    const dispatch =useDispatch()
    return(
        <div>
        {cartItems.length==0?(<h1>empty cart empty heart </h1>):
        cartItems.map((item)=>
        <div key={item.id}>
            <h2 >{item.name}</h2>
                <img src={item.imgUrl} alt={item.name}/>
                <h3 style={{color:'green'}}>{item.price*item.quantity}$</h3>
                <button onClick={()=>dispatch(removeFromCart(item.id))}>_</button>
                <p style={{color:'red'}}>they are {item.quantity} in cart</p>
</div>)}
        </div>)
}