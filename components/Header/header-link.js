import Link from "next/link";
import { useRouter } from "next/router";
import { string } from "prop-types";
const HeaderLink = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link passHref href={href}>
      <a
        data-testid="header-link-component"
        className={`text-omdb-gray-light hover:text-omdb-gray-light-2 uppercase font-bold ${
          href === asPath ? "border-b-2" : ""
        }`}
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
