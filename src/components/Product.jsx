import React from "react";

function Product (props){
    return <div className="note">
        <img className="image-size" src={props.image} />
        <h1>{props.head}</h1>
        <p>{props.price}</p>
        <p>{props.units}</p>
    </div>
};

export default Product;