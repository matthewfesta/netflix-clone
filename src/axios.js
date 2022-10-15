import axios from "axios";

// Base url to make requests to the movie database.

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: config,
});

export default instance;


// const instance = axios.create({
//     // creates an instance of this base url so that the rest 
//     //of the url can be appended later
//     baseUrl: 'https://api.themoviedb.org/3',
// });

// export default instance;
