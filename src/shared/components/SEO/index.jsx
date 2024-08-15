import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** SEO */
export default function SEO({ title, description, pathname, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const defaultTitle = data.site.siteMetadata.title;
  const defaultDescription = data.site.siteMetadata.description;
  const siteUrl = data.site.siteMetadata.siteUrl;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  );
}
