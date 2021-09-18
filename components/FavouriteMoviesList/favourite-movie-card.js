import { TitleDescriptionPair } from "../MovieCard/TitleDescriptionPair";
import PosterImage from "../PosterImage";
import Link from "next/link";
import { PAGE_URL_LIST } from "../../utils/constants";
import AddToFavourites from "../AddToFavourites";

const FavouriteMovieCard = (props) => {
  return (
    <div className="grid w-fit-content grid-cols-2 rounded-lg bg-gray-100 p-6">
      <div>
        <PosterImage
          className="h-60 w-full "
          Poster={props.poster}
          Title={props.title}
        />
      </div>
      <div className="grid">
        <div className="grid">
          <TitleDescriptionPair title="Title:" description={props.title} />
          <TitleDescriptionPair title="Plot:" description={props.plot} />
          <Link passHref href={PAGE_URL_LIST.getMovieUrlById(props.imdbID)}>
            <a className="rounded-xl text-center h-fit-content w-fit-content px-4 py-1 bg-gray-600 font-body font-bold text-gray-50 text-lg">
              Check movie
            </a>
          </Link>
        </div>
        <AddToFavourites {...props} />
      </div>
    </div>
  );
};
export default FavouriteMovieCard;
