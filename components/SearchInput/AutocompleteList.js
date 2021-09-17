import { array } from "prop-types";
import Link from "next/link";

const AutocompleteList = ({ list, hidAutocompleteList }) => {
  return (
    <div
      onMouseLeave={hidAutocompleteList}
      className="absolute bg-white rounded-md shadow border-2 border-t-0 z-10"
    >
      <ul className="grid gap-y-2">
        {list.map((el, index) => {
          const { Title, imdbID } = el;
          return (
            <Link
              key={index}
              passHref
              className="bg-gray-700 font-body font-bold text-white text-lg"
              href={`/movies/${imdbID}`}
            >
              <li className="p-2 hover:bg-gray-50 cursor-pointer">{Title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default AutocompleteList;
AutocompleteList.propTypes = {
  list: array,
};
AutocompleteList.defaultProps = {
  list: [],
};
