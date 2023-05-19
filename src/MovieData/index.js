import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieBox from './MovieBox';

const API_KEY = 'api_key=f864c444928645f66814d9fbaba37ee6';
const BASE_URL = 'https://api.themoviedb.org/3/';

const MovieData = () => {
   
    const [movies, setMovies] = useState([ ]);

    const getPopularMovieData = async() => {
        const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&'+API_KEY;

            const response = axios.get (API_URL)
            .then(response =>{console.log(response.data)
            })
            .catch(error => {console.log(error)})
        
            setMovies(response.results);
         
          }
        useEffect(() => {
            getPopularMovieData();
        }, []);

    return (
        <div>
            {movies && movies.map((movie) =>
            <MovieBox key={movie.id}/>
        )}
        </div>
    )
}

export default MovieData;

