import { string } from "prop-types";
import { isEmpty } from "../../../utils/generics";
import { fromCommasToArray } from "../../../utils/strings";
import SingleGenre from "./single-genre";

const Genres = ({ genres }) => {
  const genresList = fromCommasToArray(genres);
  return (
    !isEmpty(genresList) && (
      <div
        data-testid="movie-genres-component"
        className="grid grid-flow-col gap-x-1 w-fit-content"
      >
        {genresList.map((genre, index) => {
          return <SingleGenre key={index} genre={genre} />;
        })}
      </div>
    )
  );
};
export default Genres;
Genres.propTypes = {
  genres: string.isRequired,
};
