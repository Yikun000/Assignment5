import "./DetailView.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DetailView({ movieId: propMovieId, backToGenre, clickedFromFeature }) {
    const navigate = useNavigate();
    const params = useParams();
    const [movie, setMovie] = useState(null); // Start with null
    const [isLoading, setIsLoading] = useState(true); // New loading state
    const movieId = propMovieId || params.movieId; //so detail view can be both in MoviesView and a seperate view
    const [featureClicked, setFeatureClicked] = useState(true);

    useEffect(() => {
        if (params.movieId == null) {
            setFeatureClicked(false)
        } else {
            setFeatureClicked(true)
        }
    }, [params.movieId])

    useEffect(() => {
        (async function getMovie() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.TMDB_API_KEY}&append_to_response=videos`
            );
            setMovie(response.data);
            setIsLoading(false); // Set loading state to false after data is fetched
        })();
    }, [movieId]);

    return (
        <div classNameName="movieDetails">
            {isLoading ? (
                <div>Loading...</div> //Shows a loading message
            ) : (
                <>
                    <img id="inDetail" classNameName="moviePoster"
                        src={movie.poster_path ?
                            `https://image.tmdb.org/t/p/w400${movie.poster_path}` :
                            `https://placehold.co/400x600?text=Movie+Poster+Unavailable+for+${movie.original_title}`}
                        alt={movie.original_title}
                    />
                    <div classNameName="movieInfo">
                        <h1 id="textInDetail" >{movie.original_title}</h1>
                        {movie.original_language == "en" ? null : <h1 id="textInDetail" >Translated Title: {movie.title}</h1>}
                        <p id="textInDetail" >Description:<br />{movie.overview}</p>
                        <h3 id="textInDetail" >Released Date: {movie.release_date}</h3>
                        <h2 id="textInDetail" >Runtime: {movie.runtime} minutes</h2>
                        <h3 id="textInDetail" >Budget: {movie.budget == 0 ? "N/A" : "$" + (movie.budget) / 1000000 + " Million"}</h3>
                    </div>

                    <div classNameName="productionCompanies">
                        <h1 id="textInDetail">Production Companies</h1>
                        <ul classNameName="companiesList">
                            {movie.production_companies.map((company) => (
                                <li id="textInDetail" key={company.id}>{company.name}</li>
                            ))}
                        </ul>
                    </div>

                    <h1 id="textInDetail" classNameName="trailerTitle">Teaser Trailers:</h1>
                    <div classNameName="teaserTrailers">
                        {movie.videos && movie.videos.results.map((trailer) => (
                            trailer.type == "Teaser" || trailer.type == "Trailer" || trailer.type == "Clip" ? (
                                <div key={trailer.id} classNameName="trailerTile">
                                    <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noopener noreferrer">
                                        <img classNameName="trailerThumbnail"
                                            src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                                            alt={trailer.name} />
                                        <h3 classNameName="trailerName">{trailer.name}</h3>
                                    </a>
                                </div>
                            ) : null
                        ))}
                    </div>
                </>
            )}
            {featureClicked ?
                <button classNameName="backButton" onClick={() => navigate(-1)}>Back</button>
                : <button classNameName="backButton" onClick={() => backToGenre()}>Back</button>}
        </div>
    );
}

export default DetailView;