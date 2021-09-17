import { string } from "prop-types";

const SingleGenre = ({ genre, isLast }) => (
  <>
    <span className="text-omdb-gray-medium font-medium border-2 border-omdb-gray-medium rounded-full px-2">
      {genre}
    </span>
    {/* {!isLast && <span className="movie-info">|</span>} */}
  </>
);

export const Genres = ({ genres }) => {
  const genresList = genres.split(",");
  return (
    <div className="grid grid-flow-col gap-x-1 w-fit-content">
      {genresList.map((genre, index) => {
        return (
          <SingleGenre
            key={index}
            genre={genre}
            isLast={!(index < genresList.length - 1)}
          />
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  genres: string.isRequired,
};
