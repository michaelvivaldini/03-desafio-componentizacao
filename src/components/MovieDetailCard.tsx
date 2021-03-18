import { Star, Clock } from 'react-feather';
import { MovieResponseProps } from '../@types/movie.type';

import '../styles/movie-card.scss';

export function MovieCard(props: MovieResponseProps) {
  return (
    <div className="movie-card">
      <img
        src={props.Poster}
        alt={props.Title}
      />

      <div>
        <div className="movie-info">
          <span>{props.Title}</span>
          <div className="meta">
            <div>
              <Star /> {props.Ratings}
            </div>

            <div>
              <Clock /> {props.Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}