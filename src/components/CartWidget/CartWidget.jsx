import React from "react";
import "./CartWidget.css"

export const CartWidget = () => {
    return (
        <div className="divCart">
            <img src="/images/cart.png" alt="" width={30}/>
            <span className="divCartCant">5</span>
        </div>
    )
}