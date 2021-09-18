import { array } from "prop-types";

import Pagination from "./Pagination";
import PosterImage from "../PosterImage";

import { Movie } from "../Icons";

import MovieLink from "../MovieLink";

const MovieCardList = ({
  error,
  movieList,
  itemsPerPage,
  maxItems,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div data-testid="movie-card-list-container" className="px-6">
      {error && <div className="">{error}</div>}
      <div className="grid lg:grid-cols-2 gap-4">
        {movieList.map((el, index) => (
          <div
            key={index}
            className="grid gap-y-4 bg-gray-50 rounded-lg font-body p-4"
          >
            <h1 className="text-center uppercase">{el.Title}</h1>
            <div className="grid px-4 gap-4 grid-cols-2">
              <PosterImage
                className="h-64  rounded-2xl overflow-hidden"
                Poster={el.Poster}
                Title={el.Title}
              />

              <div className="grid justify-center my-auto lg:my-0 lg:justify-start h-fit-content gap-y-4">
                <h2 className="text-left">Information</h2>
                <span className="inline-flex">
                  Type: <Movie /> [{el.Year}]
                </span>
                <MovieLink imdbID={el.imdbID} text="Check movie" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {movieList.length > 0 && (
        <div className="grid">
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            maxItems={maxItems}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCardList;
MovieCardList.propTypes = {
  movieList: array,
};
MovieCardList.defaultProps = {
  movieList: [],
};
