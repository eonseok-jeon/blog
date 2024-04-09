import { graphql } from 'gatsby';

/** Post Detail Page */
export default function Post({ data }) {
  return (
    <>
      <p>{data.mdx.frontmatter.title}</p>
      <p>{data.mdx.frontmatter.date}</p>
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        thumbnail_alt
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
