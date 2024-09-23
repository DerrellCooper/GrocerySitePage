import React from "react";



function CartItem(props){


    return(
        <div className="row d-flex">
            <div className="col-6 d-flex justify-content-start">
                <h5 className="p-2 ">{props.name}</h5>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <h5 className="p-2">{`$${props.price.toFixed(2)}`}</h5>
            </div>           
        </div>
    )
}
export default CartItem