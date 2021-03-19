import { Clock, Star, Calendar } from 'react-feather';
import { MovieResponseProps } from '../@types/movie.type';
import '../styles/movie-page.scss';

interface MovieProps {
  movie: MovieResponseProps;
  setSelectedMovie: (movie: MovieResponseProps) => void;
}

export function MoviePage({ movie, setSelectedMovie }: MovieProps) {
  return (
    <div className="container">
      <header>
        <span className="category"><span>{movie.Title}</span></span>
      </header>
      <img
        onClick={() => setSelectedMovie({} as MovieResponseProps)}
        src="icons/goBackArrow.svg"
        alt="go back"
      />
      <main className="main-movie">
        <div className="movie-container">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className="metadata">
            <div className="info">
              <span><strong>Genres <br /> </strong>{movie.Genre}</span>
              <span><strong>Writers <br /> </strong>{movie.Writer}</span>
              <span><strong>Director <br /> </strong>{movie.Director}</span>
              <span><strong>Plot <br /> </strong>{movie.Plot}</span>
              <span><strong>Actors <br /> </strong>{movie.Actors}</span>
              <span><strong>Production <br /></strong>{movie.Production}</span>
              <span><strong>Awards <br /></strong>{movie.Awards}</span>
            </div>
            <div className="icons">
              <div><Star /> {movie.imdbRating}</div>
              <div><Clock /> {movie.Runtime}</div>
              <div><Calendar /> {movie.Year}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}