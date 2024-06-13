import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const messageList = [];

export const Messages = () => {
    const { pathname } = useLocation();
    const [ messages, setMessages ] = useState(messageList);

    const list = messageList.map((message) =>  <li>{message}</li>);

    function handleClear() {
       const newMessages = messages.splice(0, messages.length);
       setMessages(newMessages);
    }

    /* Ad ogni aggiornamento della variabile pathname che contiene l'URL attuale, l'hook useEffect permette di analizzare il 
    percorso e aggiungere la stringa relativa alla lista dei messaggi messageList */
    useEffect(() => {
        if(pathname === "/books") {
            messageList.push("BookService - Fetched Books");
        } else if(pathname === "/")  {
            messageList.push("Book Service - Fetched Home");
        } else {
            messageList.push(`BookService - Fetched book with ID: ${pathname.slice(1)}`);
        }}, [pathname]);

    return(
        <>
        <label>MESSAGES</label>
        <ul className="message-list">{ list }</ul>
        <button type="button" class="clear" title="Delete all messages" onClick={ handleClear }>Clear Messages</button>
        </>
    )
}