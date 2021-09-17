import Image from "next/image";
import { string } from "prop-types";
import { isEmpty } from "../../utils/generics";

const PosterImage = ({ className, Poster, Title }) => {
  return (
    <div
      data-testid="poster-image-component"
      className={`relative ${className}`}
    >
      {isEmpty(Poster) && (
        <span className="absolute text-white">No Poster Available</span>
      )}
      <Image
        src={isEmpty(Poster) ? "https://picsum.photos/id/237/200/300" : Poster}
        alt={Title}
        layout="fill"
        objectFit="contain"
        quality="100"
      />
    </div>
  );
};
export default PosterImage;
PosterImage.propTypes = {
  Poster: string,
  Title: string,
  className: string,
};
PosterImage.defaultProps = {
  className: "",
};
