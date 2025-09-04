
import * as actions from '../action-types/action-types.js'

var cart=[]
export const cartReducer=(state=cart,action)=>{
    switch(action.type){
        case actions.AddToCart:
            const item =action.payload
            const exists=state.find((cartItem)=>cartItem.id==item.id)
            if (exists){
                        return state.map((cartItem)=>
                        cartItem.id==item.id
                    ?{...cartItem,quantity:cartItem.quantity+1,inCart:true}:
                cartItem)
                    
            }else{
                return[
                    ...state,{
                        ...item,
                        inCart:true,
                        quantity:1
                        
                    }
                ]
            };
        case actions.RemoveFromCart:
             const id =action.payload
            const existsInCart=state.find((cartItem)=>cartItem.id===id)
           if (!existsInCart) {
            return state;
           } if(existsInCart.quantity>1){
            return state.map((cartItem)=>
             cartItem.id===id 
                ?{...cartItem,quantity:cartItem.quantity-1}
            :cartItem )
                    
            }else{ return state.filter((cartItem)=>cartItem.id !==id)}
            
            ;
        default:
            return state;
    }

}