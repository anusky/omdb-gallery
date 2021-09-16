import { string } from "prop-types";
import Image from "next/image";
import { Generes } from "./Generes";
import { IMBDTag } from "../IMBDTag";
import { RatedTag } from "../RatedTag";

const MovieCard = (props) => {
  const { Title, Year, Genre, Released, Runtime, Poster, imdbRating, Rated } =
    props;
  return (
    <div className="grid grid-cols-3">
      <div className="grid col-span-2 col-start-1">
        <h1>
          {Title} ({Year})
        </h1>
        <Generes generesString={Genre} />
        <div className="grid grid-flow-col gap-x-2 w-fit-content">
          <span className="text-gray-300 font-body">{Released}</span>
          <span className="font-body">{Runtime}</span>
        </div>
        <div className="grid grid-flow-col w-fit-content place-items-center gap-x-2">
          <span className="font-bold">{imdbRating}/10</span>
          <IMBDTag />
          <RatedTag rated={Rated} />
        </div>
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
