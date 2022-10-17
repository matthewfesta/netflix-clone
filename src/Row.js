// Contains the Row component
import React, { useState, useEffect } from 'react'
import axios from './axios.js';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    // State - to keep track of the movies with short term memory
    // The React way to write variables
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // If [], run once when row loads and don't run again.
        async function fetchData() {
          const request = await axios.get('550?api_key=a12935ab024a281dfccc14d657ed7e00');
          // request.data.results is what contains the movie objects 
          setMovies(request.data.results);
          return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

      const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }
 
  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">

          {movies.map(movie => (
            
              <img
              key={movie.id} /* Make rendering more efficient and smooth  */
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} /*For styling the larger row differently */
              src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name} />
          ))} 
            
        </div>
        <div style={{ padding: "40px" }}>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
       </div>
    </div>
  )
}

export default Row
