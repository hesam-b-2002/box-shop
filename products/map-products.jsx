import { addToCArt } from "../action/actions";
import { store } from "../store/store";
import { goods } from "./producstList";
import { useDispatch } from "react-redux";

export const MapedProducts=()=>{
    const dispatch=useDispatch()

    return(
        <div>
            {goods.map((good)=>
            <div key={good.id}>
                <h2>{good.name}</h2>
                <img src={good.imgUrl} alt={good.name}/>
                <h3 style={{color:'green'}}>{good.price}$</h3>
                <p style={{color:'red'}}>they are {good.Instock} in stock</p>
                <button onClick={()=>dispatch(addToCArt(good))}>+</button>
            </div>)}
        </div>
    )
}