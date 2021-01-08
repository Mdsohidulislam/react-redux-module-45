import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions"

    const initialState={
    cart:[],
    products:[
        {name:'lenovo',price:'100',id:'1'},
        {name:'lenov2',price:'200',id:'2'},
        {name:'lenov3',price:'300',id:'3'},
        {name:'lenov4',price:'400',id:'4'},
        {name:'lenov5',price:'500',id:'5'}
    ]
    }

    const cardReducers=(state=initialState,action) => {
        switch(action.type){ 
            case ADD_TO_CART :
                // console.log(action);
                // return ({
                //     cart:[...state.cart,action.id]
                // })
                // or
                const newId=action.id;
                const newItem={
                    productId:newId,
                    name:action.name,
                    cartId:state.cart.length+1
                }
                const newCart=[...state.cart,newItem]
                // return {products:state.products,   cart:newCart};
                return {...state,   cart:newCart};

            case REMOVE_FROM_CART :
                const id=action.cartId;
                const remainingCart=state.cart.filter(item=>item.cartId !== id);
                return {...state,cart:remainingCart}

                default :
                return state;
        }
    }
    export default cardReducers;