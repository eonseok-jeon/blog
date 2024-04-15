import { graphql, useStaticQuery } from 'gatsby';

/** SEO */
export default function SEO({ title }: { title: string }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
}
