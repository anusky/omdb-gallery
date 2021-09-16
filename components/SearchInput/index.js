import { useEffect, useState } from "react";
import useSwr from "swr";
import MovieCardList from "../MovieCardList";
import AutocompleteList from "./AutocompleteList";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SearchInput = () => {
  const [value, setValue] = useState("");
  const [listVisible, setListVisible] = useState(false);
  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };
  const { data } = useSwr(
    value.length ? `/api/movies/${value}` : null,
    fetcher
  );
  const checkListShouldBeVisible = (data) => {
    if (data?.Search?.length > 0) {
      setListVisible(true);
    }
  };

  useEffect(() => {
    checkListShouldBeVisible(data);
  }, [data]);

  return (
    <div className="w-full grid gap-y-6">
      <div className="px-6">
        <label className="text-gray-700 text-sm font-bold mb-2">Movie</label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChangeInput}
          onClick={() => checkListShouldBeVisible(data)}
          value={value}
          placeholder="Buscar..."
        />

        {listVisible && (
          <AutocompleteList
            list={data?.Search}
            hidAutocompleteList={() => setListVisible(false)}
          />
        )}
      </div>
      <MovieCardList movieList={data?.Search} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default SearchInput;
