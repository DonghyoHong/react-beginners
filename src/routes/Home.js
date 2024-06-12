import React, {useEffect, useState} from "react";
import Movie from "../components/section7/Movie";
import styles from "./Home.module.css";

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
        <section className="container">
            {loading ?
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            poster={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            year={movie.year}
                        ></Movie>
                    ))}
                </div>
            }
        </section>
    );
}

export default Home;
