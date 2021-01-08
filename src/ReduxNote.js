// 45.4======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//     // create action.js and dispatch 
//     export const ADD_TO_CART="ADD_TO_CART"
// export const REMOVE_FROM_CART='REMOVE_FROM_CART'

// export const addToCart= id => {
//     return {type:ADD_TO_CART,id}
//     };

// export const removeFromCart= id => {
//     return {type:REMOVE_FROM_CART,id}
//     }


// 45.5======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     // create Reducers and setup reducer.js
//     import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions"

//     const initialState={
//     cart:[]
//     }

//     const cardReducers=(state=initialState,action) => {
//         switch(action.type){
//             case ADD_TO_CART :
//                 // return ({
//                 //     cart:[...state.cart,action.id]
//                 // })
//                 // or
//                 const newId=action.id;
//                 const newCart=[...state.cart,newId]
//                 return {cart:newCart};

//             case REMOVE_FROM_CART :
//                 const id=action.id;
//                 const remainingCart=state.cart.filter(item=>item !== id);
//                 return {cart:remainingCart}

//                 default :
//                 return state;
//         }
//     }
//     export default cardReducers;





// 45.6======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // create store.js and setup
// import { createStore } from "redux";
// import cardReducers from "../Reducers/CartReducers";

//    export const store=createStore(cardReducers);

// //    create some added index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { store } from './Redux/Store/Store';

// ReactDOM.render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






// 45.7======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     // Shop.js
//     import React from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from '../../Redux/Actions/CartActions';
// import Product from '../Product/Product';

// const Shop = () => {

//     const product=[
//         {name:'lenovo',price:'100',id:'1'},
//         {name:'lenov2',price:'200',id:'2'},
//         {name:'lenov3',price:'300',id:'3'},
//         {name:'lenov4',price:'400',id:'4'},
//         {name:'lenov5',price:'500',id:'5'}
//     ]


//     return (
//         <div>
//             <h1>Shop Components</h1>
//             {
//                 product.map(pd=><Product key={pd.id} product={pd}></Product>)
//             }
//         </div>
//     );
// };

//     const mapStateToCart=state=>{
//         return {
//             cart:state.cart,
//             products:state.products
//         }
//     }

//     const mapDispatchToCart={
//         addToCart:addToCart
//     }

//     // const connectToStore=connect(mapStateToCart,mapDispatchToCart)

//     // connectToStore(Shop);

//     // or

//     // connect(mapStateToCart,mapDispatchToCart)(Shop);


// export default connect(mapStateToCart,mapDispatchToCart)(Shop);
// // CartReducers.js
// import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions"

//     const initialState={
//     cart:[],
//     products:[]
//     }

//     const cardReducers=(state=initialState,action) => {
//         switch(action.type){
//             case ADD_TO_CART :
//                 // return ({
//                 //     cart:[...state.cart,action.id]
//                 // })
//                 // or
//                 const newId=action.id;
//                 const newCart=[...state.cart,newId]
//                 return {cart:newCart};

//             case REMOVE_FROM_CART :
//                 const id=action.id;
//                 const remainingCart=state.cart.filter(item=>item !== id);
//                 return {cart:remainingCart}

//                 default :
//                 return state;
//         }
//     }
//     export default cardReducers;


// 45.8======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Shop.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from '../../Redux/Actions/CartActions';
// import Product from '../Product/Product';

// const Shop = (props) => {

//     console.log(props);

//     // const products=[
//     //     {name:'lenovo',price:'100',id:'1'},
//     //     {name:'lenov2',price:'200',id:'2'},
//     //     {name:'lenov3',price:'300',id:'3'},
//     //     {name:'lenov4',price:'400',id:'4'},
//     //     {name:'lenov5',price:'500',id:'5'}
//     // ]
//     const {products,addToCart}=props;

//     return (
//         <div>
//             <h1>Shop Components</h1>
//             {
//                 products.map(pd=><Product
//                     key={pd.id}
//                     product={pd}
//                     addToCart={addToCart}
//                     ></Product>)
//             }
//         </div>
//     );
// };

//     const mapStateToCart=state=>{
//         return {
//             cart:state.cart,
//             products:state.products
//         }
//     }

//     const mapDispatchToCart={
//         addToCart:addToCart
//     }

//     // const connectToStore=connect(mapStateToCart,mapDispatchToCart)

//     // connectToStore(Shop);

//     // or

//     // connect(mapStateToCart,mapDispatchToCart)(Shop);


// export default connect(mapStateToCart,mapDispatchToCart)(Shop);
// // Product.js
// import React from 'react';
// // open drawer ctrl+b
// // clear react-redux JamelA visit this website react-redux.org
// const Product = (props) => {
//     const {product,addToCart}=props; 

//     return (
//         <div style={{border:'1px solid tomato',padding:'20px',margin:"10px"}}>
//             <h2>Name : {product.name}</h2>
//             <button onClick={()=>addToCart(product.id)}>Add product</button>
//         </div>
//     );
// };

// export default Product;
// // CartReducers.js
// import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions"

//     const initialState={
//     cart:[],
//     products:[
//         {name:'lenovo',price:'100',id:'1'},
//         {name:'lenov2',price:'200',id:'2'},
//         {name:'lenov3',price:'300',id:'3'},
//         {name:'lenov4',price:'400',id:'4'},
//         {name:'lenov5',price:'500',id:'5'}
//     ]
//     }

//     const cardReducers=(state=initialState,action) => {
//         switch(action.type){
//             case ADD_TO_CART :
//                 // return ({
//                 //     cart:[...state.cart,action.id]
//                 // })
//                 // or
//                 const newId=action.id;
//                 const newCart=[...state.cart,newId]
//                 return {products:state.products,   cart:newCart};

//             case REMOVE_FROM_CART :
//                 const id=action.id;
//                 const remainingCart=state.cart.filter(item=>item !== id);
//                 return {cart:remainingCart}

//                 default :
//                 return state;
//         }
//     }
//     export default cardReducers;




45.9======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartActions';

const Cart = (props) => {
    const {cart,removeFromCart}=props;
    console.log(props);

    return (
        <div>
            <h1>This is Cart Component</h1>
            <ul>
                {
                    cart.map(id=><li key={id}>{id} <button onClick={()=>removeFromCart(id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps=state=>{
    return{cart:state.cart}
}

const mapDispatchToProps={
    removeFromCart:removeFromCart
}
// export default connect(mapStateToProps,mapDispatchToProps)(Cart);

// CartReducer.js
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
                // return ({
                //     cart:[...state.cart,action.id]
                // })
                // or
                const newId=action.id;
                const newCart=[...state.cart,newId]
                // return {products:state.products,   cart:newCart};
                return {...state,   cart:newCart};

            case REMOVE_FROM_CART :
                const id=action.id;
                const remainingCart=state.cart.filter(item=>item !== id);
                return {...state,cart:remainingCart}

                default :
                return state;
        }
    }
    // export default cardReducers;







45.10======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartActions';

const Cart = (props) => {
    const {cart,removeFromCart}=props;
    console.log(props);

    return (
        <div>
            <h1>This is Cart Component</h1>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}>{pd.name} <button onClick={()=>removeFromCart(pd.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps=state=>{
    return{cart:state.cart}
}

const mapDispatchToProps={
    removeFromCart:removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);

// CartActions.js
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART='REMOVE_FROM_CART'

export const addToCart= (id,name) => {
    return {type:ADD_TO_CART,id,name}
    };

export const removeFromCart= id => {
    return {type:REMOVE_FROM_CART,id}
    }

    // CartReducers.js

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
                const id=action.id;
                const remainingCart=state.cart.filter(item=>item.cartId !== id);
                return {...state,cart:remainingCart}

                default :
                return state;
        }
    }
    export default cardReducers;


    // Product.js

    import React from 'react';
// open drawer ctrl+b
// clear react-redux JamelA visit this website react-redux.org
const Product = (props) => {
    const {product,addToCart}=props; 

    return (
        <div style={{border:'1px solid tomato',padding:'20px',margin:"10px"}}>
            <h2>Name : {product.name}</h2>
            <button onClick={()=>addToCart(product.id,product.name)}>Add product</button>
        </div>
    );
};

export default Product;




45.3======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
45.3======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
45.3======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
45.3======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
45.3======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>