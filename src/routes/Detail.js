import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const movieId = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const getMoviesDetail = async () => {
        const movieDetailJson = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId.id}`)).json();
        setMovieDetail(movieDetailJson.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        getMoviesDetail();
    }, []);

    return (
        <div>
            {
                loading ? <h1>Loading...</h1> :
                    <div>
                        <h1>{movieDetail.title}</h1>
                        <p>{movieDetail.description_full}</p>
                    </div>
            }
        </div>
    );
}

export default Detail;