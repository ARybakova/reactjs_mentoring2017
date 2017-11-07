import React from 'react';
import { Link } from 'react-router-dom';

export const MovieHeader = ( {movie} ) => (
    <header className="header movie_header">
        <div className="header_top_bar">
            <span className="netflix_label">netflixroulette</span>
            <Link to={'/search'} className="searchpage_btn">search</Link>
        </div>
        <div className="movie_details">

            <img src={'https://image.tmdb.org/t/p/w342' + movie.poster_path} className="movie_details_img"/>
            <div className="movie_details_info">
                <div className="movie_details_title_container">
                    <div className="movie_details_title">{movie.title}</div>
                    <div className="movie_details_rating">{movie.vote_average}</div>
                </div>
                <div className="movie_details_genre">{movie.genres[0].name}</div>
                <div className="movie_details_release_container">
                    <div className="movie_details_release">Released: {movie.release_date}</div>
                    <div className="movie_details_duration">{movie.runtime} mins</div>
                </div>
                <div className="movie_details_description">{movie.overview}</div>
                <div className="movie_details_director">Company: {movie.production_companies[0].name}</div>
            </div>
        </div>
    </header>
);