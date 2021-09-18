import { isEmpty } from "@/utils/generics";
import { array } from "prop-types";
import FavouriteMovieCard from "./favourite-movie-card";
import Link from "next/link";
import { PAGE_URL_LIST } from "@/utils/constants";

const FavouriteMoviesList = ({ favList }) => {
  return (
    <div
      data-testid="fav-list-component"
      className="grid grid-flow-col gap-x-8 gap-y-8"
    >
      {!isEmpty(favList) ? (
        <>
          {favList.map((movie, index) => (
            <FavouriteMovieCard key={index} {...movie} />
          ))}
        </>
      ) : (
        <div data-testid="fav-list-empty" className="grid gap-y-4">
          <span>Ooops seems you still have no added favouties movies.</span>
          <span>Maybe can go back home and find some to add.</span>
          <Link passHref href={PAGE_URL_LIST.HOME}>
            <a className="rounded-xl text-center h-fit-content w-fit-content px-4 py-1 bg-gray-100 font-bold text-omdb-gray-dark  text-lg">
              Go Home
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavouriteMoviesList;
FavouriteMoviesList.propTypes = {
  favList: array,
};
