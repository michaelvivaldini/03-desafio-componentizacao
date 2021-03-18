import { Clock, Star } from 'react-feather';
import { MovieResponseProps } from '../@types/movie.type';
import { MovieCard } from '../components/MovieCard';
import '../styles/movie-page.scss';

interface MovieProps {
  movie: MovieResponseProps;
}

export function MoviePage({ movie }: MovieProps) {
  return (
    <div className="container">
      <header>
        <span className="category"><span>{movie.Title}</span></span>
      </header>

      <main>

        <div className="movie-info">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
          <span>{movie.Title}</span>
          <div className="meta">
            <div>
              <Star /> {movie.Ratings[0].Value}
            </div>

            <div>
              <Clock /> {movie.Runtime}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}