import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, url, image }) => {
  const canonicalUrl = url || window.location.origin;

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
