// Contains the Row component
import React, { useState, useEffect } from 'react'
import axios from './axios.js';


function Row({ title, fetchURL }) {
    // State - to keep track of the movies with short term memory
    // The React way to write variables
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs a based on a specific condition/variable
    useEffect(() => {
        // If [], run once when row loads and don't run again.
        async function fetchData() {
          const request = await axios.get(fetchURL);
          // request.data.results is what contains the movie objects 
          console.log(request.data.results);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
    }, [fetchURL]);
  return (
    <div>
        <h2>{title}</h2>
        {/* Container -> posters */}
    </div>
  )
}

export default Row
