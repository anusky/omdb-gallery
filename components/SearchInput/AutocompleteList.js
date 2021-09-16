import { array } from "prop-types";

const AutocompleteList = ({ list, hidAutocompleteList }) => {
  return (
    <div
      onMouseLeave={hidAutocompleteList}
      className="absolute bg-white rounded-md shadow border-2 border-t-0 z-10"
    >
      <ul className="grid gap-y-2">
        {list.map((el, index) => {
          const { Title } = el;
          return (
            <li className="p-2 hover:bg-gray-50 cursor-pointer" key={index}>
              {Title}
            </li>
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
