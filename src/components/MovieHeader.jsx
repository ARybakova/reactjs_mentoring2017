import React from 'react';

export const MovieHeader = ( {movie} ) => (
    <header className="header movie_header">
        <div className="header_top_bar">
            <span className="netflix_label">netflixroulette</span>
            <button className="searchpage_btn">search</button>
        </div>
        <div className="movie_details">

            <img src={movie.poster} className="movie_details_img"/>
            <div className="movie_details_info">
                <div className="movie_details_title_container">
                    <div className="movie_details_title">{movie.show_title}</div>
                    <div className="movie_details_rating">{movie.rating}</div>
                </div>
                <div className="movie_details_genre">{movie.category}</div>
                <div className="movie_details_release_container">
                    <div className="movie_details_release">{movie.release_year}</div>
                    <div className="movie_details_duration">{movie.runtime}</div>
                </div>
                <div className="movie_details_description">{movie.summary}</div>
                <div className="movie_details_director">Director: {movie.director}</div>
                <div className="movie_details_cast">Cast: {movie.show_cast}</div>
            </div>
        </div>
    </header>
);