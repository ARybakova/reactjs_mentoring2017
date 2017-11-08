import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import 'url-search-params-polyfill';

import { Footer } from '../components/Footer';
import { Movie } from '../components/Movie';
import { MovieHeader } from '../components/MovieHeader';
import { MoviePage } from '../components/MoviePage';
import { MovieResults } from '../components/MovieResults';
import { NotFound } from '../components/NotFound';
import { SearchHeaderWithRouter as SearchHeader } from '../components/SearchHeader';
import { SearchPage } from '../components/SearchPage';
import { SearchResults } from '../components/SearchResults';

configure({ adapter: new Adapter() });

const movieData = {
  movie: {
    genre_ids: [ 28, 12, 878, 14 ],
    id: 11027,
    poster_path: "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
    release_date: "1981-03-20",
    title: "The Postman Always Rings Twice",
    vote_average: 5,
    runtime: 108,
    production_companies: [{
      id: 1176,
      name: "Lorimar Film Entertainment"
    }],
    genres: [
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 18,
        name: "Drama"
      },
    ],
    overview: "Truman Gates, a Chicago cop, sets out to find his brother's killer. Meanwhile, another of his brothers, Briar (a hillbilly) decides to find the killer himself."
  },
  results: [
    {
      "vote_count": 8212,
      "id": 140607,
      "title": "Star Wars: The Force Awakens",
      "popularity": 36.966573,
      "poster_path": "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
      "genre_ids": [ 28, 12, 878, 14 ]
    },
    {
      "vote_count": 7002,
      "id": 11,
      "title": "Star Wars",
      "popularity": 29.600934,
      "poster_path": "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
      "genre_ids": [ 28, 12, 878, 14 ]
    },
    {
      "vote_count": 5361,
      "id": 330459,
      "title": "Rogue One: A Star Wars Story",
      "popularity": 28.890412,
      "poster_path": "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
      "genre_ids": [ 28, 12, 878, 14 ]
    },
    {
      "vote_count": 0,
      "id": 181808,
      "title": "Star Wars: The Last Jedi",
      "popularity": 27.037908,
      "poster_path": "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
      "genre_ids": [ 28, 12, 878, 14 ]
    },
    {
      "vote_count": 3299,
      "id": 89,
      "title": "Indiana Jones and the Last Crusade",
      "popularity": 19.307414,
      "poster_path": "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
      "genre_ids": [ 28, 12, 878, 14 ]
    },
    {
      "vote_count": 4215,
      "id": 1894,
      "title": "Star Wars: Episode II - Attack of the Clones",
      "popularity": 19.104688,
      "poster_path": "/p0g8mKDx52ObdNQLhembcMavqeI.jpg",
      "genre_ids": [ 28, 12, 878, 14 ]
    }
  ]
};

const searchData = {
  results: [
    {
      "vote_count": 8212,
      "id": 140607,
      "title": "Star Wars: The Force Awakens",
      "popularity": 36.966573,
    },
    {
      "vote_count": 7002,
      "id": 11,
      "title": "Star Wars",
      "popularity": 29.600934
    },
    {
      "vote_count": 5361,
      "id": 330459,
      "title": "Rogue One: A Star Wars Story",
      "popularity": 28.890412
    },
    {
      "vote_count": 0,
      "id": 181808,
      "title": "Star Wars: The Last Jedi",
      "popularity": 27.037908
    },
    {
      "vote_count": 3299,
      "id": 89,
      "title": "Indiana Jones and the Last Crusade",
      "popularity": 19.307414
    },
    {
      "vote_count": 4215,
      "id": 1894,
      "title": "Star Wars: Episode II - Attack of the Clones",
      "popularity": 19.104688
    }
  ],
  parameter: "title",
  value: "kill",
  sortMethod: "sortByRelease"
};

describe('<SearchPage/>', () => {
  // it returns error without any obvious reasons - it can not find property "genre_ids" at Movie.jsx:12:115),
  // but it is really defined on line 21 here.
  // if you replace "movie.genre_ids[0]" in Movie.jsx with "movie.genre_ids", all will be ok - wtf???
  const setParameterSpy = jest.fn();
  const setValueSpy = jest.fn();
  const doSearchSpy = jest.fn();
  const sortResultsSpy = jest.fn();

  const pageActions = {
    setParameter: setParameterSpy,
    setValue: setValueSpy,
    doSearch: doSearchSpy,
    sortResults: sortResultsSpy
  };

  const location = {
    search: "?parameter=title&value=nothing"
  };

  it('should call componentWillMount', () => {
    const renderedComponent = mount(
      <Router>
        <SearchPage location={location} search={searchData} pageActions={pageActions} />
      </Router>
    );
    expect(setParameterSpy.mock.calls.length).toBe(1);
    expect(setValueSpy.mock.calls.length).toBe(1);
    expect(doSearchSpy.mock.calls.length).toBe(1);
  })
});

describe('<SearchHeader/>', () => {
  const parameter = searchData.parameter;
  const value = searchData.value;

  const setParameterSpy = jest.fn();
  const setValueSpy = jest.fn();
  const doSearchSpy = jest.fn();

  it('should call setParameter after click on parameter button', () => {
    const renderedComponent = mount(
      <Router>
        <SearchHeader
          parameter={parameter}
          value={value}
          setParameter={setParameterSpy}
          setValue={setValueSpy}
          doSearch={doSearchSpy}
        />
      </Router>
    );
    renderedComponent.find('.search_filter_btn.active').simulate('click');
    expect(setParameterSpy.mock.calls.length).toBe(1);
  });

  it('should call doSearch with correct params when form submits', () => {
    const renderedComponent = mount(
      <Router>
        <SearchHeader
          parameter={parameter}
          value={value}
          setParameter={setParameterSpy}
          setValue={setValueSpy}
          doSearch={doSearchSpy}
        />
      </Router>
    );
    renderedComponent.find('.search_form').simulate('submit');

    expect(doSearchSpy.mock.calls.length).toBe(1);
    expect(doSearchSpy.mock.instances[0].parameter).toEqual(parameter);
    expect(doSearchSpy.mock.instances[0].value).toEqual(value);
  });
});

describe('<SearchResults/>', () => {
  // see the comment about this error above
  const sortMethod = searchData.sortMethod;
  const results = searchData.results;

  const setSortMethodSpy = jest.fn();

  it('should call sortByMethod when mounting', () => {
    const sortResultsSpy = jest.fn();

    const renderedComponent = mount(
      <Router>
        <SearchResults
        sortMethod={sortMethod}
        results={results}
        setSortMethod={setSortMethodSpy}
        sortResults={sortResultsSpy}
      />
      </Router>
    );
    expect(sortResultsSpy.mock.calls.length).toBe(1);
  });

  it('should call sortByMethod when sets sortMethod', () => {
    const sortResultsSpy = jest.fn();

    const renderedComponent = mount(
      <Router>
        <SearchResults
          sortMethod={sortMethod}
          results={results}
          setSortMethod={setSortMethodSpy}
          sortResults={sortResultsSpy}
        />
      </Router>
    );
    expect(sortResultsSpy.mock.calls.length).toBe(1);
    renderedComponent.find('.results_filter_btn.active').simulate('click');
    expect(sortResultsSpy.mock.calls.length).toBe(2);
  });

  it('should show "No films found" if there are no data to show', () => {
    const sortResultsSpy = jest.fn();

    const results = [];
    const renderedComponent = shallow(
      <SearchResults
        sortMethod={sortMethod}
        results={results}
        setSortMethod={setSortMethodSpy}
        sortResults={sortResultsSpy}
      />
    );
    expect(renderedComponent.find('.results_empty').text()).toEqual('No films found');
  });
});

describe('<MoviePage/>', () => {
  // see the comment about this error above
  const match = {
    params: {
      name: "Next of Kin"
    }
  };
  const getMoviesSpy = jest.fn();
  const pageActions = {
    getMovie: getMoviesSpy
  };
  it('should call componentWillMount', () => {
    mount(
      <Router>
        <MoviePage movie={movieData} match={match} pageActions={pageActions}/>
      </Router>
    );
    expect(getMoviesSpy.mock.calls.length).toBe(1);
  });

  it('should show NotFound if there are no data to show', () => {
    const movieData = {
      movie: {},
      results: []
    };

    const renderedComponent = shallow(
        <MoviePage movie={movieData} match={match} pageActions={pageActions}/>
    );
    expect(renderedComponent.find(NotFound)).toBeTruthy();
  });
});

describe('<MovieHeader/>', () => {
  const movie = movieData.movie;
  const renderedComponent = shallow(
    <MovieHeader movie={movie} />
  );

  it('should have link to poster', () => {
    expect(renderedComponent.find('.movie_details_img').prop('src')).toBe('https://image.tmdb.org/t/p/w342' + movie.poster_path);
  });
  it('should show company correctly', () => {
    expect(renderedComponent.find('.movie_details_director').text()).toBe('Company: ' + movie.production_companies[0].name);
  });
});

describe('<MovieResults/>', () => {
  const movie = movieData.movie;
  const results = movieData.results;

  const renderedComponent = shallow(
    <MovieResults movie={movie} results={results} />
  );

  it('should show correct title', () => {
    expect(renderedComponent.find('.results_title').text()).toBe('Films by ' + movie.production_companies[0].name);
  });

  it('should have correct number of movies', () => {
    expect(renderedComponent.find('.results_items').children()).toHaveLength(results.length);
  })
});

describe('<Movie/>', () => {
  const movie = movieData.movie;

  const renderedComponent = shallow(
    <Movie key={movie.id} movie={movie} />
  );

  it('should show movie title', () => {
    expect(renderedComponent.find('.movie_title').text()).toBe(movie.title);
  });

  it('should have link to poster', () => {
    expect(renderedComponent.find('.movie_img').prop('src')).toBe('https://image.tmdb.org/t/p/w342' + movie.poster_path);
  });
});

describe('<Footer/>', () => {
  it('should show Netflix name', () => {
    const renderedComponent = shallow(
      <Footer/>
    );
    expect(renderedComponent.find('.footer_label.netflix_label').text()).toEqual('netflixroulette');
  })
});

describe('<NotFound/>', () => {
  it('should show error text', () => {
    const renderedComponent = shallow(
      <NotFound/>
    );
    expect(renderedComponent.find('.not_found_text').text()).toEqual('Sorry, this page doesn\'t exist :(');
  })
});