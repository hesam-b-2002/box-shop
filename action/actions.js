import {AddToCart,RemoveFromCart} from '../action-types/action-types.js'


export const addToCArt=(anyProduct)=>({
    type:AddToCart,
    payload:anyProduct
})

export const removeFromCart=(id)=>({
    type:RemoveFromCart,
    payload:id
})