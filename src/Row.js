// Contains the Row component
import { MongoMissingCredentialsError } from 'mongodb';
import React, { useState, useEffect } from 'react'
import axios from './axios.js';
import './row.css';

const baseURL = "https://image.tmdb.org/t/p/original/";

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

    console.table(movies); // console.table for arrays / objects 
  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
          {/* container -> posters */}
          {/* map through the movies array to retrieve image*/}
          {movies.map(movie => (
            
              <img
              key={movie.id} /* Make rendering more efficient and smooth  */
              className="row__poster"
              src={`${baseURL}${movie.poster_path}`} alt={movie.name} />
          ))} 
            
        </div>
        {/* Container -> posters */}
    </div>
  )
}

export default Row
