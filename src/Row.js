// Contains the Row component
import React, { useState, useEffect } from 'react'
import axios from './axios.js';
import './row.css';

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    // State - to keep track of the movies with short term memory
    // The React way to write variables
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // If [], run once when row loads and don't run again.
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          // request.data.results is what contains the movie objects 
          setMovies(request.data.results);
          return request;
        }
        fetchData();
    }, [fetchUrl]);
 
  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">

          {movies.map(movie => (
            
              <img
              key={movie.id} /* Make rendering more efficient and smooth  */
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} /*For styling the larger row differently */
              src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))} 
            
        </div>
    </div>
  )
}

export default Row
