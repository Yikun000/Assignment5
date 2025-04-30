import "./Genres.css";

function GenresList({ selectGenreId, genresList, genreSelected }) {

    return (
        <div classNameName="genreListContainer">
            <h1 classNameName="genreTitle">Genres</h1>
            <div classNameName="genreList">
                {genresList.map((genre) => (
                    <button key={genre.id} classNameName={`genres ${genreSelected == genre.id ? "selected" : ""}`} onClick={() => selectGenreId(genre.id)} > {genre.genreName} </button>
                ))}
            </div>
        </div>
    );
}

export default GenresList