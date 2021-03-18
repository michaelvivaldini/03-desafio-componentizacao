import { GenreResponseProps } from "../@types/genre.type";
import { MovieResponseProps } from "../@types/movie.type";
import { MovieCard } from "../components/MovieCard";

import '../styles/catalog-page.scss';

interface CatalogPageProps {
  selectedGenre: GenreResponseProps;
  setSelectedMovie: (movie: MovieResponseProps) => void;
  movies: MovieResponseProps[]
}

export function CatalogPage({ selectedGenre, setSelectedMovie, movies }: CatalogPageProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard movie={movie} setSelectedMovie={setSelectedMovie} />
          ))}
        </div>
      </main>
    </div>
  )
}