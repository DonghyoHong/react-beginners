import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, poster, title, genres, summary, year}) {
    return (
        <Link to={`/movie/${id}`} state={{
            year: year
            , title: title
            , genres: genres
            , summary: summary
            , poster: poster
        }}>
            <div className={styles.movies}>
                <img className={styles.movie} src={poster} alt={title}></img>
                <div className="movie__data">
                    <h3 className={styles.movie__title}>
                        {title}
                    </h3>
                    <h5 className={styles.movie__year}>{year}</h5>
                    <ul className={styles.movie__genres}>
                        {genres.map((genre, index) => <li className={styles.movie__genres} key={index}>{genre}</li>)}
                    </ul>
                    <p className={styles.movie__year}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired
    , poster: PropTypes.string.isRequired
    , title: PropTypes.string.isRequired
    , summary: PropTypes.string.isRequired
    , genres: PropTypes.arrayOf(PropTypes.string).isRequired
    , year: PropTypes.number.isRequired
}

export default Movie;