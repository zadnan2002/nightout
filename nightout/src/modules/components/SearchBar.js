import React, { useState } from 'react';
import "./SearchBar.css";

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import Axios from 'axios';

export default function SearchBar() {

    const [eventName, setEventName] = useState([]);

    const getUsernames = () => {
        Axios.get('http://localhost:3002/cards')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].eventName;
                }
                setEventName(arr);
                console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState([]);

    const handleFilter = (event) => {
        getUsernames();
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = eventName.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        < div className="search" style={{ display: "flex", justifyContent: "center" }}>
            <div className="searchInputs">
                <input type="text" placeholder="Enter Event Name" value={wordEntered} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (<SearchIcon />) : (<CloseIcon id="clearBtn" onClick={clearInput} />)}
                </div>

            </div>
            {
                filteredData.length !== 0 && (
                    <div className="dataResult" /*style={{ position: "absolute", marginTop: "380px" }}*/>
                        {filteredData.map((value, key) => {
                            return <p className="dataItem">
                                <p>{value}</p>
                            </p>
                        })}
                    </div>
                )
            }
        </div >
    )
}
