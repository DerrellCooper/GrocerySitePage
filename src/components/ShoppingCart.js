import React from "react";
import CartItem from "./CartItem";

function ShoppingCart(props){

    const renderCart = props.data.map(
        (currentItem) => {
            return (
                <CartItem name={currentItem.item} price={currentItem.price} />
            )
        }
    )
    
    

    return (
        <div>
            <div className="row">
            {props.data[0] === '' ? 'add items' : renderCart}
            </div>
            <div className="row d-flex justify-content-end">
                <div className="col-6">
                    <p>Subtotal:{` $${props.cartSubtotal.toFixed(2)}`} </p>
                    <p>Tax:{` $${props.cartTax.toFixed(2)}`}</p>
                    <p>Total:{`$${(props.cartSubtotal + props.cartTax).toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart