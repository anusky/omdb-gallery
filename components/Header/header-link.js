import Link from "next/link";
import { string } from "prop-types";
const HeaderLink = ({ text, href }) => {
  return (
    <Link passHref href={href}>
      <a
        data-testid="header-link-component"
        className="text-omdb-gray-medium hover:text-omdb-gray-dark-2 font-medium border-2 border-omdb-gray-medium hover:border-omdb-gray-dark-2 rounded-full px-2 uppercase"
      >
        {text}
      </a>
    </Link>
  );
};
export default HeaderLink;
HeaderLink.propTypes = {
  text: string.isRequired,
  href: string.isRequired,
};
