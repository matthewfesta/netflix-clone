import axios from "axios";

// Base url to make requests to the movie database.

const instance = axios.create({
    // creates an instance of this base url so that the rest 
    //of the url can be appended later
    baseUrl: 'http://api.themoviedb.org/3',
});

export default instance;
