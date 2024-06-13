import React from "react";
import img from "./logo.png";

export const Header = () => {
    return (
        <>
            <div className="banner">
                <img className="logo" src={img} alt="UNIPV LOGO" width="200" height="80"/>
            </div>
            <h1>BOOK EDITOR</h1>
        </>
    )
}