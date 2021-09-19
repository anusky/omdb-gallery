/**
 * @function isEmpty tells if data provided is an empty element
 * @param {(object|string|array)} data type of data to check
 * @returns boolean telling if data is empty or not
 */
export const isEmpty = (data) => {
  switch (typeof data) {
    case "object":
      return Object.keys(data).length <= 0;
    case "string":
      return data.length <= 0;
    default:
      return data === undefined || data === null;
  }
};

/**
 * @function isCorrectImageSrc tells if image source provided corresponds to an image
 * @param {string} imageSrc image source
 * @returns boolean telling if image source is correct or not
 */
export const isCorrectImageSrc = (imageSrc) => {
  return (
    typeof imageSrc === "string" && imageSrc !== "N/A" && !isEmpty(imageSrc)
  );
};
