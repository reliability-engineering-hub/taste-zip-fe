import React, {useState} from "react";
import axios from "axios";


const SearchRestaurant = () => {
    const [query, setQuery] = useState();
    const [results, setResults] = useState([]);

    const searchAPI = async (input) => {
        const reponse = await axios.get()
    }
}