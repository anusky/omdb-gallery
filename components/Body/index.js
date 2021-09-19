import { string } from "prop-types";
const Body = ({ children, dataTestid }) => {
  return (
    <main data-testid={dataTestid} className="lg:pt-108 pb-8">
      {children}
    </main>
  );
};
export default Body;
Body.propTypes = {
  dataTestid: string,
};
Body.defaultProps = {
  dataTestid: "body-component",
};
