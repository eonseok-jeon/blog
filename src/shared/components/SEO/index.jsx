import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

/** SEO */
export default function SEO({
  title,
  description,
  pathname,
  ogImage,
  children,
}) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          ogImage
        }
      }
    }
  `);

  const defaultTitle = data.site.siteMetadata.title;
  const defaultDescription = data.site.siteMetadata.description;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const defaultOgImage = data.site.siteMetadata.ogImage;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    ogImage: getSrc(ogImage) || defaultOgImage,
  };

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content="eonseok's blog" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content="Eonseok Jeon" />
      {children}
    </>
  );
}
