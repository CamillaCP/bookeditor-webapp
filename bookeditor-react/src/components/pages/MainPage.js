import React from "react";

import Book, { books } from "../Book";
import { BookSearch } from "../BookSearch";

export const MainPage = () => {
    return(
        <>
            <h2>TOP BOOKS</h2>
            <Book />
            <BookSearch placeholder="Search..." data={books} />
        </>
    )
}