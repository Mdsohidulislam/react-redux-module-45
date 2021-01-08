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