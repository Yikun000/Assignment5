import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailMovieView.css";

function DetailView() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        if (id === null) return;

        async function getDetails() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
            );
            setDetails(response.data);
        }
        getDetails();
    }, [id]);

    return (
        <div className="detail-container">
            <h className="detail-title">{details.original_title}</h>
            <p className="detail-tagline">{details.tagline}</p>
            <p className="detail-overview">{details.overview}</p>
            <div className="details-info">
                <p><strong>Release Date:</strong> {details.release_date}</p>
                <p><strong>Runtime:</strong> {details.runtime} minutes</p>
            </div>
            {details.poster_path && (
                <img
                    className="detail-poster"
                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                    alt={details.original_title}
                />
            )}

            <div className="trailers-section">
                <h2>Trailers</h2>
                <div className="trailers-grid">
                    {details.videos && details.videos.results.map((trailer) => (
                        <div key={trailer.id} className="trailer-tile">
                            <a
                                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="trailer-thumbnail"
                                    src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                                    alt={trailer.name}
                                />
                                <h3>{trailer.name}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default DetailView;