// Contains the Row component
import React, { useState, useEffect } from 'react'
import axios from './axios.js';

function Row({ title, fetchUrl }) {
    // State - to keep track of the movies with short term memory
    // The React way to write variables
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs a based on a specific condition/variable
    useEffect(() => {
        // If [], run once when row loads and don't run again.
        async function fetchData() {
            const request = await axios.get(fetchUrl) // appends the url to the base url w/ API key
            console.log(request);
            return request;
        }
        fetchData();
    }, []);
  return (
    <div>
        <h2>{title}</h2>
        {/* Container -> posters */}
    </div>
  )
}

export default Row
