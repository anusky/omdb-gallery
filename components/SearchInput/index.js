import { getSearchApi } from "@/utils/apiRoutes";
import { RESULTS_PER_PAGE } from "@/utils/constants";
import { useEffect, useState } from "react";
import useSwr from "swr";
import MovieCardList from "../MovieCardList";
import AutocompleteList from "./AutocompleteList";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SearchInput = () => {
  const [value, setValue] = useState("");
  const [listVisible, setListVisible] = useState(false);
  const [[currentResults, totalResults, currentPage], setResults] = useState([
    0, 0, 1,
  ]);
  const [autocompleteSelect, setAutocompleteSelected] = useState(0);

  const handleChangeInput = (event) => {
    setValue(event.target.value);
    if (event.target.value.length > 2) {
      setResults([currentResults, totalResults, 1]);
    }
  };
  const handleOnEnterInput = (event) => {
    event.preventDefault();
    setListVisible(false);
  };

  const { data } = useSwr(getSearchApi(`${value}`, `${currentPage}`), fetcher);

  const checkListShouldBeVisible = (data) => {
    if (data?.Search?.length > 0) {
      setListVisible(true);
      setResults([RESULTS_PER_PAGE, Number(data.totalResults), currentPage]);
    } else {
      setListVisible(false);
    }
  };

  const handlePageChange = (selectedPage) => {
    setResults([currentResults, totalResults, selectedPage]);
  };

  useEffect(() => {
    checkListShouldBeVisible(data);
  }, [data]);

  const handleOnKeyPress = (event) => {
    var key = event.which || event.keyCode;

    switch (key) {
      case 38:
        event.preventDefault();
        setAutocompleteSelected(
          autocompleteSelect - 1 < 0
            ? data?.Search.length - 1
            : autocompleteSelect - 1
        );
        break;
      case 40:
        event.preventDefault();
        setAutocompleteSelected(
          autocompleteSelect + 1 >= data?.Search.length
            ? 0
            : autocompleteSelect + 1
        );
    }
  };

  return (
    <div data-testid="search-input-component" className="w-full grid gap-y-6">
      <div className="px-6">
        <form onSubmit={handleOnEnterInput} autoComplete="off">
          <label
            htmlFor="movie"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Movie
          </label>

          <input
            type="text"
            id="movie"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChangeInput}
            onKeyDown={handleOnKeyPress}
            onClick={() => checkListShouldBeVisible(data)}
            value={value}
            placeholder="Search...Johnny Stecchino"
          />
          <button type="submit"></button>
        </form>

        {listVisible && (
          <AutocompleteList
            handleOnKeyPress={handleOnKeyPress}
            selected={autocompleteSelect}
            list={data?.Search}
            hidAutocompleteList={() => setListVisible(false)}
          />
        )}
      </div>
      <MovieCardList
        error={data?.Error}
        movieList={data?.Search}
        itemsPerPage={currentResults}
        maxItems={totalResults}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchInput;
