import React, {useEffect, useState} from "react";
import Movie from "../components/section7/Movie";

const movieUrl = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const movieJson = await (await fetch(movieUrl)).json();
        setMovies(movieJson.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        ></Movie>
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;
