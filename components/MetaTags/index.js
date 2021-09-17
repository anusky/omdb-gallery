import Head from "next/head";
import { shape } from "prop-types";
import { string } from "prop-types";
import { getSchemaByType } from "@utils/schemas";

const MetaTags = ({ customMetaTags, pageTitle }) => {
  const { ogTitle, ogUrl, ogDescription, ogImage, ogType, Type } =
    customMetaTags;
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <title>{pageTitle}</title>

      {/* Open Graph */}

      <meta property="og:title" content={ogTitle} key="ogtitle" />
      <meta property="og:url" content={ogUrl} key="ogurl" />
      <meta property="og:image" content={ogImage} key="ogimage" />
      <meta property="og:site_name" content="KeymarsArt" key="ogsitename" />

      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_ES" />
      <meta
        property="og:description"
        content={ogDescription}
        key="ogdescription"
      />
      {ogType && <meta property="og:type" content={ogType} />}

      {/* Twitter */}
      <meta property="twitter:title" content={ogTitle} key="twtitle" />
      <meta property="twitter:site" content="@keymarsart" key="twsite" />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twcard"
      />
      <meta property="twitter:creator" content="@keymarsart" key="twhandle" />
      <meta property="twitter:title" content={ogTitle} key="twtitle" />
      <meta property="og:title" content={ogTitle} key="ogtitle" />
      <meta
        property="twitter:description"
        content={ogDescription}
        key="twdescription"
      />
      <meta property="twitter:image" content={ogImage} key="twimage" />
      <meta
        property="twitter:image:alt"
        content={ogDescription}
        key="twimagealt"
      />

      {/* Schema Org */}

      {ogType && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaByType(Type, customMetaTags)),
          }}
        />
      )}
    </Head>
  );
};

export default MetaTags;
MetaTags.propTypes = {
  customMetaTags: shape({
    ogTitle: string,
    ogUrl: string,
    ogDescription: string,
    ogImage: string,
    ogType: string,
  }),
  pageTitle: string,
};
MetaTags.defaultProps = {
  pageTitle: "OMBD Searcher",
};
