import React from "react";
import logo from "./logo.png"
import fill from "./Fill.png"
export default function nav() {
    return (
        <>
        <img src={logo} />
        <img src={fill}  className="browser--logo"/>
        <p className="nav--content">my travel journal</p>
        </>
    )
}