import { GenreResponseProps } from "../@types/genre.type";
import { Button } from "./Button";

import '../styles/sidebar.scss';
import { MovieResponseProps } from "../@types/movie.type";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  setSelectedMovie: (movie: MovieResponseProps) => void;
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId, setSelectedMovie }: SideBarProps) {

  function handleGenreButtonClick(id: number) {
    setSelectedGenreId(id);
    setSelectedMovie({} as MovieResponseProps)
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenreButtonClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}