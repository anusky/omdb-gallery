import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

import { ChevronRight } from "../Icons";

const getBreadcrumbStructure = (slugStructure) => {
  let result = [{ text: "Home", slug: "/" }, slugStructure];

  return result;
};

const BreadcrumbLink = ({ href, children, special, disabled, className }) => {
  return (
    <>
      {disabled ? (
        <span
          className={`${className} capitalize text-omdb-gray-medium select-none font-medium`}
        >
          {children}
        </span>
      ) : (
        <Link href={href}>
          <a
            className={`${className} capitalize  hover:text-omdb-gray-dark-2 font-medium`}
          >
            {children}
          </a>
        </Link>
      )}
      {!special && <ChevronRight className={className} />}
    </>
  );
};
BreadcrumbLink.propTypes = {
  className: PropTypes.string,
};
BreadcrumbLink.defaultProps = {
  className: "",
};

const Breadcrumb = ({ slugStructure }) => {
  const breadcrumb = getBreadcrumbStructure(slugStructure);
  return (
    <div className="grid grid-flow-col w-fit-content place-items-center text-sm md:text-lg lg:text-base px-4 lg:px-5 xl:px-0">
      <>
        {breadcrumb.map((el, index) => {
          return (
            <BreadcrumbLink
              key={index}
              href={el.slug}
              special={index === breadcrumb.length - 1}
              disabled={el.disabled}
              className={el.className}
            >
              {el.text}
            </BreadcrumbLink>
          );
        })}
      </>
    </div>
  );
};
export default Breadcrumb;
Breadcrumb.propTypes = {
  slugStructure: PropTypes.object,
};
Breadcrumb.defaultProps = {
  slugStructure: {},
};
