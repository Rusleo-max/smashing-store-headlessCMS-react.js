import React from "react";

const Product = (props) => {
    return (
        <div className="col-sm-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.product.image.url} alt="shirt"/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-title">$ {props.product.price}</p>
                    <p className="card-title">{props.product.description}</p>
                    <button className="btn btn-primary" onClick={() => props.addItem(props.product)}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;