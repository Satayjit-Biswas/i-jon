import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import store from '../../img/store-icon.png'
import './Shop.css'


const Shop = () => {
    const [Shopdata , setShopdata] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then( res => res.json())
            .then( data => setShopdata(data))
    },[]);
    return (
        <div>
            <div className="shop">
                <div className="adds">
                    <h4>Total Product: {Shopdata.length}</h4>
                </div>
                <div className="item">
                    <div className="product">
                        {
                            Shopdata.map(product => <Product productdata={product}></Product>)
                        }
                    </div>
                </div>
                <div className="counter">
                    <div>
                        <h2>Order Summary</h2>
                        <h4>Total Order: <span>0</span></h4>
                        <h5>Item Price: $<span>12</span></h5>
                        <h3>Total Price: $<span>000.00</span></h3>
                        <button >Confirm order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;