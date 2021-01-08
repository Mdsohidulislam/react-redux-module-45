import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartActions';
import Product from '../Product/Product';

const Shop = (props) => { 

    // const products=[
    //     {name:'lenovo',price:'100',id:'1'},
    //     {name:'lenov2',price:'200',id:'2'},
    //     {name:'lenov3',price:'300',id:'3'},
    //     {name:'lenov4',price:'400',id:'4'},
    //     {name:'lenov5',price:'500',id:'5'}
    // ]
    const {products,addToCart}=props;

    return (
        <div>
            <h1>Shop Components</h1>
            {
                products.map(pd=><Product
                    key={pd.id}
                    product={pd}
                    addToCart={addToCart}
                    ></Product>)
            }
        </div>
    );
};

    const mapStateToProps=state=>{
        return { 
            products:state.products
        }
    }

    const mapDispatchToProps={
        addToCart:addToCart
    }

    // const connectToStore=connect(mapStateToCart,mapDispatchToCart)

    // connectToStore(Shop);

    // or

    // connect(mapStateToCart,mapDispatchToCart)(Shop);


export default connect(mapStateToProps,mapDispatchToProps)(Shop);