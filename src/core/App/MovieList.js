
const MovieList = (props) => {
    return (
        <>
        {props.movieData.map((movie, index) => (
            <div>
                <img src={movie.poster_path} alt='movie'></img>
            </div>
        ))}
        </>
    )
}
export default MovieList;