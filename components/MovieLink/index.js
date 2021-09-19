import { string } from "prop-types";
import Link from "next/link";
import { PAGE_URL_LIST } from "../../utils/constants";

const MovieLink = ({ imdbID, text }) => {
  return (
    <Link passHref href={PAGE_URL_LIST.getMovieUrlById(imdbID)}>
      <a data-testid="movie-link-component" className="omdb-button">
        {text}
      </a>
    </Link>
  );
};
export default MovieLink;
MovieLink.propTypes = {
  imdbID: string,
  text: string,
};
MovieLink.defaultProps = {
  text: "Check Movie",
};
