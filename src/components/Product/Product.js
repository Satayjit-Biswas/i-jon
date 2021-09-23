import React from 'react';
import store from '../../img/store-icon.png'

const Product = (props) => {
    console.log(props.productdata)
    return (
        <div>
            <div className="product_img">
                <img src={props.productdata.img} alt="" className="img-fluid" />
            </div>
            <div className="product_diteals">
                <h2 className="product-title"> <a href="#">{props.productdata.name}</a></h2>
                    <p>By: <span>{props.productdata.seller}</span></p>
                    <p>Price: $<span>{props.productdata.price}</span></p>
                    <p>star: <span>{props.productdata.star}</span>/5 </p>
                    <p>Only <span>{props.productdata.stock}</span> left in stock</p>
                    <button>add Product</button>
            </div>
        </div>
    );
};
export default Product;