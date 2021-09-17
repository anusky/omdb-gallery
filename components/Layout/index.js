import Body from "../Body";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <section className="flex flex-col min-h-screen">
        <Header />
        <Body>{children}</Body>
        <Footer />
      </section>
    </div>
  );
};
export default Layout;

Layout.propTypes = {};
