import Image from "next/image";
const Footer = () => {
  return (
    <footer data-testid="footer-component ">
      Check this project in Github
      <a
        href="https://github.com/anusky/omdb-gallery"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="">
          <Image src="/github.png" alt="Vercel Logo" width={32} height={32} />
        </span>
        {`github.com/anusky`}
      </a>
    </footer>
  );
};
export default Footer;
