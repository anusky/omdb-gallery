import Image from "next/image";
import { array } from "prop-types";

import { string } from "prop-types";
import useSwr from "swr";

// export async function getStaticProps() {
//   // `getStaticProps` is executed on the server side.

//   return {
//     props: {
//       fallback: {
//         "/api/movies/[id]": { loading: true },
//       },
//     },
//   };
// }

// const fetcher = (url) => fetch(url).then((res) => res.json());

const MovieCardList = ({ movieList }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 px-6">
      {movieList.map((el, index) => (
        <div
          key={index}
          className="grid gap-y-4 bg-gray-300 rounded-lg font-body p-4"
        >
          <h1 className="text-center uppercase">{el.Title}</h1>
          <div className="grid px-4 gap-4 grid-cols-2">
            <div className="relative h-64  rounded-2xl overflow-hidden ">
              <Image
                src={el.Poster}
                alt={el.Title}
                layout="fill"
                objectFit="contain"
                quality="100"
              />
            </div>

            <div className="grid justify-center my-auto lg:my-0 lg:justify-start h-fit-content">
              <h2 className="text-left">Information</h2>
              <span>{el.Type}</span>
              <span>{el.Year}</span>
            </div>
          </div>
        </div>
      ))}
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
