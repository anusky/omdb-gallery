import { PAGE_URL_LIST } from "@/utils/constants";
import HeaderLink from "./header-link";

const Header = () => {
  return (
    <nav
      data-testid="header-component"
      className="h-20 bg-omdb-gray-light-2 grid place-items-center"
    >
      <ul className="grid grid-flow-col gap-4">
        <li>
          <HeaderLink text="Home" href={PAGE_URL_LIST.HOME} />
        </li>
        <li>
          <HeaderLink text="Favourite Movies" href={PAGE_URL_LIST.FAVOURITES} />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
Header.propTypes = {};
Header.defaultProps = {};
