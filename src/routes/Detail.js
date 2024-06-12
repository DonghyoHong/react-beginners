import React, {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import styles from "./Home.module.css";

function Detail(props) {
    const movieId = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);

    if (typeof props === "object") {
        return <Navigate to="/"></Navigate>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getMoviesDetail();
    }, []);

    const getMoviesDetail = async () => {
        const movieDetailJson = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId.id}`)).json();
        setMovieDetail(movieDetailJson.data.movie);
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            {
                loading ?
                    <div className={styles.loader}>
                        <span>Loading...</span>
                    </div>
                    :
                    <div>
                        <h1>{movieDetail.title}</h1>
                        <p>{movieDetail.description_full}</p>
                    </div>
            }
        </div>
    );
}

export default Detail;