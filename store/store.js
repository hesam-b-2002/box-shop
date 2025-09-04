import { configureStore} from "@reduxjs/toolkit";
import { cartReducer } from "../reducer/cartReducer";
import { goods } from "../products/producstList";
import { addToCArt } from "../action/actions";


export const store=configureStore({
        reducer:{
            cart:cartReducer
        },
    })



