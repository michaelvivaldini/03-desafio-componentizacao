import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { CatalogPage } from './pages/CatalogPage';

import { api } from './services/api';

import './styles/global.scss';
import { GenreResponseProps } from './@types/genre.type';
import { MovieResponseProps } from './@types/movie.type';
import { MoviePage } from './pages/MoviePage';

export function App() {
  const [movies, setMovies] = useState<MovieResponseProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState({} as MovieResponseProps);
  const [selectedGenre, setSelectedGenre] = useState({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieResponseProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        setSelectedMovie={setSelectedMovie}
      />
      {selectedMovie.Title ?
        <MoviePage movie={selectedMovie} />
        :
        <CatalogPage
          selectedGenre={selectedGenre}
          setSelectedMovie={setSelectedMovie}
          movies={movies}
        />}
    </div>
  )
}