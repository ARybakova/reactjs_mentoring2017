import React from 'react';
import { Movie } from './Movie';

export const MovieResults = ( {movie, results} ) => (
  <section className="results">
      <div>
          <div className="results_panel">
              <span className="results_title">Films by {movie.production_companies[0].name}</span>
          </div>
          <div className="results_items">
            {results.map((movie) => <Movie key={movie.id} movie={movie} />)}
          </div>
      </div>
  </section>
);