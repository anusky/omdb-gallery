import { string } from "prop-types";
import Image from "next/image";

import { IMBDTag } from "../IMBDTag";
import { RatedTag } from "../RatedTag";
import { TitleDescriptionPair } from "./TitleDescriptionPair";
import { Genres } from "./Genres";
import { RatingTags } from "./RatingTags";

const MovieCard = (props) => {
  const {
    Title,
    Year,
    Genre,
    Released,
    Runtime,
    Poster,
    imdbRating,
    Rated,
    Director,
    Writer,
    Awards,
    Plot,
    Country,
    Ratings,
    Actors,
    Production,
  } = props;
  const titleAndYear = `${Title} (${Year}) `;
  return (
    <div className="grid grid-cols-3">
      <div className="grid col-span-2 col-start-1 gap-y-3">
        <div className="inline-flex place-items-center gap-x-2">
          <h1>
            {titleAndYear}
            <span className="text-omdb-gray-light">[{Runtime}]</span>
          </h1>
          <IMBDTag />
          <RatedTag rated={Rated} />
        </div>

        <Genres genres={Genre} />
        <div className="grid grid-flow-col gap-x-2 w-fit-content ">
          <span className="movie-info">Released: {Released}</span>
        </div>
        <div className="grid grid-flow-col w-fit-content place-items-center gap-x-2">
          <RatingTags ratingList={Ratings} />
        </div>

        <TitleDescriptionPair title="Country:" description={Country} />
        <TitleDescriptionPair title="Director:" description={Director} />
        <TitleDescriptionPair title="Writer:" description={Writer} />
        <TitleDescriptionPair title="Actors:" description={Actors} />
        <TitleDescriptionPair title="Awards:" description={Awards} />
        <TitleDescriptionPair title="Production:" description={Production} />
        <TitleDescriptionPair description={Plot} />
      </div>
      <div className="relative col-span-1">
        <Image
          src={Poster}
          alt={Title}
          layout="fill"
          objectFit="contain"
          quality="100"
        />
      </div>
    </div>
  );
};

export default MovieCard;
MovieCard.propTypes = {
  title: string,
  year: string,
  type: string,
  image: string,
};
MovieCard.defaultProps = {
  title: "",
  year: "",
  type: "",
};
