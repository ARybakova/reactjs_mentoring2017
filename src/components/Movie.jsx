import React from 'react';

export const Movie = ( {movie} ) => (
    <div className="movie">
        <img src={movie.poster} className="movie_img"/>
        <div className="movie_info">
            <div className="movie_info_row1">
                <div className="movie_title">{movie.show_title}</div>
                <div className="movie_release">{movie.release_year}</div>
            </div>
            <div className="movie_info_row2 movie_genre">{movie.category}</div>
        </div>
    </div>
);