import { isEmpty } from "@/utils/generics";
import PropTypes from "prop-types";
import { bool } from "prop-types";
import { string } from "prop-types";
import { DynamicIcon, ICON_ID_LIST } from "../Icons";

import BreadcrumbLink from "./breadcrumb-link";

/**
 * Slug structure containing the needed info to show it in the DOM.
 * @typedef {Object} SlugStructure
 * @property {String} SlugStructure.slug absolute url where it should poitn
 * @property {String} SlugStructure.text text to show in the DOM
 * @property {String?} SlugStructure.icon iconId to show in the DOM
 */

/**
 *
 * @param {SlugStructure} slugStructure
 * @returns Array containing a set of slugs
 */
export const getBreadcrumbStructure = (slugStructure) => {
  const defaultBreadcrumb = {
    text: "Home",
    slug: "/",
    icon: ICON_ID_LIST.HOME,
  };
  if (isEmpty(slugStructure) || !slugStructure?.text || !slugStructure?.slug) {
    return [defaultBreadcrumb];
  }

  return [defaultBreadcrumb, slugStructure];
};

const Breadcrumb = ({ slugStructure }) => {
  const breadcrumb = getBreadcrumbStructure(slugStructure);
  return (
    <div
      data-testid="breadcrumb-component"
      className="grid grid-flow-col w-fit-content place-items-center text-sm md:text-lg lg:text-base px-4 lg:px-5 xl:px-0"
    >
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
              <DynamicIcon iconId={el.icon} /> {el.text}
            </BreadcrumbLink>
          );
        })}
      </>
    </div>
  );
};
export default Breadcrumb;
Breadcrumb.propTypes = {
  slugStructure: PropTypes.shape({
    slug: string,
    disabled: bool,
    className: string,
  }),
};
Breadcrumb.defaultProps = {
  slugStructure: {},
};
