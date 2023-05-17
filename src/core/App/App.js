import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import "./App.css"


const App = () => {
    const [movieData, setMovieData] = useState([
      {
        "adult": false,
        "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
        "genre_ids": [
            27,
            53,
            14
        ],
        "id": 713704,
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "popularity": 5030.612,
        "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
        "release_date": "2023-04-12",
        "title": "Evil Dead Rise",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1017
    },
    {
        "adult": false,
        "backdrop_path": "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 640146,
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
        "popularity": 3023.011,
        "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
        "release_date": "2023-02-15",
        "title": "Ant-Man and the Wasp: Quantumania",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 2525
    },
    {
        "adult": false,
        "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 4675.159,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2202
    }
    ]);

    const getPopularMovieData = async() => {
        try {
            const apiKey = 'f864c444928645f66814d9fbaba37ee6';
            let response = axios.get (`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`);
            console.log(response.data.results);
        
            setMovieData(response.data.results);
         
        } catch (error) {
        console.error(error)
        }
        }
        
        useEffect(() => {
            getPopularMovieData();
        }, []);

    return (
        <div>
            <MovieList movieData={movieData}/>
        </div>
    )
}

export default App;

