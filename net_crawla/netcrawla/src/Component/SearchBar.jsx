import React from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";
import { useState } from 'react';



export default function SearchBar() {

const apiKey = import.meta.env.VITE_API_KEY

const [input, setInput] = useState(" ");

const fetchData = (value) => {
  fetch("https://api.shodan.io/host/search?key${apiKey}")
  .then((response) => response.json())
  .then((json) => {
    return(json);
  });
};

const handleChange = (value) => {
  setInput(value)
  fetchData(value)
}

  return (
    <div className='input-wrapper'>
    <FaSearch id="search-icon"/> 
    <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)}/>
    {/* see notes */}
    </div>
  )
}


// line 15: e stands for element. this line is like saying set the value of "e," when there is a change, and set that value to setInput state varible. So now we have this data that the user input stored into state varibale. 

// At first it said setInput, to reflect what wa store in the search bar, but later we changed that to handle change because the data that is inputted into the serach bar (on line 17, with asyc with the data in the api)

// the use of then on line 10: Because the fetch is asyncronous, and it returns the value of the data later in time, you have to chain a .then fucntion onto it, which awaits for the results and then performs actions on it. 
// then we have to convert the recived data into JASON which can be read by javascript (response.json). then we add on another .then and put the json value within that, so that  cthe json data can exit the function. 

// when U use https://api.shodan.io/api-info?key=${process.env.VITE_APP_API_KEY}, it just shows how much credit my account had for the month. So adding this info into the fetch data is not what I want. 

// Line 10: Because I am not using plain react, I have to use a differnt way to insert api-keys other than process.env.REACT_APP_API_KEY. this syntax does not work for vite and it will throw off the entire project (thus my white screen)