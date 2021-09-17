import PropTypes from "prop-types";
const Body = ({ children, dataTestid }) => {
  return (
    <main
      data-tstid={dataTestid}
      className="pt-14 md:pt-16 lg:pt-108 pb-32 md:pb-200"
    >
      {children}
    </main>
  );
};
export default Body;
Body.propTypes = {
  dataTestid: PropTypes.string,
};
Body.defaultProps = {
  dataTestid: "body-component",
};
