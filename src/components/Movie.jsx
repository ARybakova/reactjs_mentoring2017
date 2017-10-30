import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({movie}) => ( //to check this and other strings
    <Link to={'/film/' + movie.title} className="movie">
        <img src={'https://image.tmdb.org/t/p/w342' + movie.poster_path} className="movie_img"/>
        <div className="movie_info">
            <div className="movie_info_row1">
                <div className="movie_title">{movie.title}</div>
                <div className="movie_release">{movie.release_date}</div>
            </div>
            <div className="movie_info_row2 movie_genre">{movie.genre_ids[0]}</div>
        </div>
    </Link>
);