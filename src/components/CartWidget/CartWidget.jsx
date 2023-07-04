import React from "react";
import "./CartWidget.css"

export const CartWidget = () => {
    return (
        <div>
            <img src="/assets/cart.png" width={30}/>
            <span className="cartCant">5</span>
        </div>
    )
}