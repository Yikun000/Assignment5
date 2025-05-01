import "./GenreView.css";
import { useState, useEffect } from "react";
import axios from "axios";

function GenreView({ genreId, enterDetailView }) {
    const [fetchingMovies, setFetchingMovies] = useState(true);
    const [movies, setMovies] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1); 
    }, [genreId]);

    useEffect(() => {
        (async function getMovies() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
                );
                setMovies(response.data.results);
                setMaxPages(response.data.total_pages);
            } catch (error) {
                console.error("ERROR in fetching movies", error);
            } finally {
                setFetchingMovies(false);
            }
        })();
    }, [genreId, page]);

    function renderMoviePosters() {
        if (movies.length <= 19) {
            return null;
        }

        return (
            <>
                <div id="inGenre" className="moviesContainer">
                    {movies.map((movie) => (
                        <div key={movie.id} id="inGenre" className="moviePoster">
                            <div
                                id="inGenre"
                                className="posterContainer"
                                onClick={() => enterDetailView(movie.id)}
                            >
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                                            : `https://placehold.co/300x450?text=Movie+Poster+Unavailable`
                                    }
                                    alt={movie.title}
                                />
                            </div>
                            <h1 id="inGenre" className="movieTitle">{movie.title}</h1>
                        </div>
                    ))}
                </div>

                <div className="pageSelector">
                    <button
                        className="prevButton"
                        onClick={() =>
                            page > 1
                                ? setPage(page - 1)
                                : alert('You are on the first page, there is no previous page.')
                        }
                    >
                        Previous
                    </button>

                    <input
                        className="pageNumberBox"
                        type="number"
                        min={1}
                        max={maxPages}
                        value={page}
                        onChange={(event) => {
                            const newPage = Number(event.target.value);
                            if (newPage >= 1 && newPage <= maxPages) {
                                setPage(newPage);
                            } else {
                                alert('Page does not exist');
                            }
                        }}
                    />

                    <button
                        className="nextButton"
                        onClick={() =>
                            page < maxPages
                                ? setPage(page + 1)
                                : alert('You are on the last page, there is no next page.')
                        }
                    >
                        Next
                    </button>
                </div>
            </>
        );
    }

    return (
        <div>
            {fetchingMovies ? <p>Loading...</p> : renderMoviePosters()}
        </div>
    );
}

export default GenreView;
