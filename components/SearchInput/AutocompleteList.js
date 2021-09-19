import { array } from "prop-types";
import Link from "next/link";
import { PAGE_URL_LIST } from "@/utils/constants";
import { useEffect, useState } from "react";

const AutocompleteList = ({ list, hidAutocompleteList, selected }) => {
  const [currentSelected, setSelected] = useState(selected);
  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  return (
    <div
      data-testid="autocomplete-list-component"
      onMouseLeave={hidAutocompleteList}
      className="absolute bg-white rounded-md shadow border-2 border-t-0 z-10"
    >
      <ul
        className="grid gap-y-2"
        tabIndex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
      >
        {list.map((el, index) => {
          const sel = currentSelected === index;
          const { Title, imdbID } = el;
          return (
            <Link
              key={index}
              passHref
              className="bg-gray-700 font-body font-bold text-white text-lg"
              href={PAGE_URL_LIST.getMovieUrlById(imdbID)}
            >
              <li
                id={`listbox-option-${index}`}
                role="option"
                aria-selected={sel}
                className={`p-2 hover:bg-gray-50 cursor-pointer ${
                  sel ? "bg-gray-50" : ""
                }`}
              >
                {Title}
              </li>
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
