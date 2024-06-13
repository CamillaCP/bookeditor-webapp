import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { books } from "../Book";
import { messageList } from "../Messages";

export const BookListPage = () => {
    const [list, setList] =useState(books);
    const [ name, setName ] = useState('');
    let navigate = useNavigate();

    /* Funzione che aggiorna lo stato della variabile name a seguito dell'inserimento di un nuovo titolo nell'elemento di input*/
    function handleChange(event) {
        setName(event.target.value);
    }

    /* Funzione che aggiorna lo stato dell'elenco contente i libri (list), aggiungendo un nuovo libro a seguito del click sul 
    pulsante di aggiunta */
    function handleAdd() {
        const lastBook = list[(list.length - 1)];
        const newList = list.concat({ name, id: ((lastBook.id)+1)});
        setList(newList);
        setName('');
        messageList.push(`BookService - Added Book with ID:${(list.length)+1}`);

    }

    /* Funzione che aggiorna lo stato dell'elenco contente i libri (list), rimuovendo il libro a seconda dell'id,
     a seguito del click sul pulsante di rimozione relativo al libro da rimuovere */
    function handleRemove(id) {
        const newList = list.filter((book) => book.id !== id);
        setList(newList);
        messageList.push(`BookService - Deleted Book with ID:${id}`);
    }
    
    /* Elementi da stampare. L'elemento di input testuale richiama la funzione handleChange in seguito a un aggiornamento del
    testo, inizialmente settato al valore corrente del titolo (name); i pulsanti di aggiunta e rimozione richiamano 
    rispettivamente le funzioni handleAdd e handleRemove */
    return(
        <>
        <p className="list-title">BOOK LIST</p>
        <h3>Book Title:</h3>
        <input className="add-book-title" type="text" value={ name } onChange={ handleChange } />
        <button type="button" className="add-button" onClick={ handleAdd }>Add book</button>
            <ul className="books">
                {list.map((book) => (
                <li key={book.id}> <a onClick={() => {navigate(`/${book.id}`);}}>{""}{book.id}) {book.name} </a>
                <button type="button" className="delete" title="Delete this book" onClick={() => handleRemove(book.id)}>X</button>
                </li> ))}
            </ul>
        </>

    )

}

