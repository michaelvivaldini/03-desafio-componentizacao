import { Star, Clock } from 'react-feather';
import { MovieResponseProps } from '../@types/movie.type';

import '../styles/movie-card.scss';

interface MovieCardProps {
  movie: MovieResponseProps;
  setSelectedMovie: (movie: MovieResponseProps) => void;
}

export function MovieCard({ setSelectedMovie, movie }: MovieCardProps) {
  return (
    <div className="movie-card" onClick={() => setSelectedMovie(movie)}>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />

      <div>
        <div className="movie-info">
          <span>{movie.Title}</span>
          <div className="meta">
            <div>
              <Star /> {movie.imdbRating}
            </div>

            <div>
              <Clock /> {movie.Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}