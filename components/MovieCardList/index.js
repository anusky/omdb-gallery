import Image from "next/image";
import { array } from "prop-types";
import Link from "next/link";

import Pagination from "./Pagination";
import PosterImage from "../PosterImage";
import { PAGE_URL_LIST } from "utils/constants";
import { Movie } from "../Icons";

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
                <Link passHref href={PAGE_URL_LIST.getMovieUrlById(el.imdbID)}>
                  <a className="rounded-xl text-center h-fit-content w-fit-content px-4 bg-gray-600 font-body font-bold text-gray-50 text-lg">
                    Check movie
                  </a>
                </Link>
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
