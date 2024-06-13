import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { messageList } from "./Messages";

export const BookSearch = ( {placeholder, data} ) => {
    const [ filteredData, setFilteredData ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");
    let navigate = useNavigate();


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") { 
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        };
        if (newFilter.length !== 0) {
            messageList.push(`Book Service - Found books matching ${searchWord}`)
        } else {
            messageList.push(`Book Service - No books matching ${searchWord}`)
        };

    };
    
    return (
        <div>
            <label>BOOK SEARCH</label>
            <input className="search-tool"  type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                {filteredData.length !== 0 && (
                    <ul className="search-result">
                        {filteredData.map((value, key) => {
                            return (
                                <li className="bookItem">
                                <a onClick={() => {navigate(`/${value.id}`)}}>{""}{value.name} </a>
                                </li>
                            );
                        })}
                    </ul>
                )}           
        <br/><br/><br/><br/>
        </div>
    )}