import Link from "next/link";
import { string, bool } from "prop-types";
import { ChevronRight } from "../Icons";

const BreadcrumbLink = ({ href, children, special, disabled, className }) => {
  return (
    <>
      {disabled ? (
        <span
          className={`inline-flex ${className} capitalize text-omdb-gray-medium select-none font-medium`}
        >
          {children}
        </span>
      ) : (
        <Link href={href}>
          <a
            className={`inline-flex ${className} capitalize  hover:text-omdb-gray-dark-2 font-medium`}
          >
            {children}
          </a>
        </Link>
      )}
      {!special && <ChevronRight className={className} />}
    </>
  );
};

export default BreadcrumbLink;
BreadcrumbLink.propTypes = {
  className: string,
  href: string,
  special: bool,
  disabled: bool,
};
BreadcrumbLink.defaultProps = {
  className: "",
  disabled: false,
  special: false,
};
