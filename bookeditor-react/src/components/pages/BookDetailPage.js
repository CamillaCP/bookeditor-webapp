import React, { useState } from "react";
import {useParams, useNavigate } from 'react-router-dom';

import { books } from "../Book";
import { messageList } from "../Messages";

export const BookDetailPage = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ list, setList ] = useState(books);

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangeAuthor(event) {
        setAuthor(event.target.value);
    }

    function handleSave() {
        const newList = list;
        newList[(id)-1 ] = {id, name, author};
        setList(newList);
        setName('');
        setAuthor('');
        messageList.push(`Updated book with ID: ${ id }`);
    }

    return (
        <>
        <div>
        <h2 className="book-details"> "{ books.at((id)-1).name }" Details</h2>
        <div className="id-slot"><label for="id">ID: </label>{ id }</div>
        </div>
        <div className="name">
        <label className="name-slot" for="book-name">Book Name: &nbsp;&nbsp;</label>
        <input className="name-form" id="book-name" placeholder="Name" defaultValue={books.at((id)-1).name} onChange={ handleChangeName } />
        </div>
        <div className="author">
        <label className="author-slot" for="book-author">Book Author: </label>
        <input className="author-form" id="book-author" placeholder="Author" defaultValue={books.at((id)-1).author} onChange={ handleChangeAuthor } />
        </div><br /><br />
        <button className="form-button" type="button" onClick={ handleSave }>Save</button> &nbsp;
        <button className="form-button" type="button" onClick={() => navigate(-1)}>Go Back</button>
        </>
    )

}
