import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    let navigate = useNavigate();
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <button onClick={() => {navigate("/");}}>{""}<i class="material-icons">home</i>Home</button>&nbsp;
        <button onClick={() => {navigate("/books");}}>{""}<i class="material-icons">menu_book</i>&nbsp;Books</button>
        </>
    )
}