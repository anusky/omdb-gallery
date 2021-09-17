/**
 * @function fromCommasToArray - converts an string with names sepataed by commas into an array
 * @param {String} str
 * @returns array containing string info separated
 */
export const fromCommasToArray = (str = "") => {
  if (typeof str !== "string") {
    return [];
  } else {
    // Even if string is "a, b" or "a,b" it should return [a, b]
    return str.split(/,\s*/);
  }
};

/**
 * @function fromSpacesToPlus - converts an string with names sepataed by commas into an array
 * @param {String} str
 * @returns array containing string info separated
 */
export const fromSpacesToPlus = (str = "") => {
  if (typeof str !== "string") {
    return [];
  } else {
    // Even if string is "a, b" or "a,b" it should return [a, b]
    return str.replace(/ /, "+");
  }
};
