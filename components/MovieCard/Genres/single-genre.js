import { string } from "prop-types";
import { isEmpty } from "../../../utils/generics";

const SingleGenre = ({ genre }) =>
  !isEmpty(genre) && (
    <span
      data-testid="single-genre-component"
      className="text-omdb-gray-medium font-medium border-2 border-omdb-gray-medium rounded-full px-2"
    >
      {genre}
    </span>
  );

export default SingleGenre;
SingleGenre.propTypes = {
  genre: string,
};
