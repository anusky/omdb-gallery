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
