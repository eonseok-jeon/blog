import styled from '@emotion/styled';
import PostPreview from './PostPreview';
import { Link } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostsProps {
  data: {
    allMdx?: {
      nodes: {
        frontmatter: {
          title: string;
          subTitle: string;
          date: string;
          tag: string;
          url: string;
          thumbnail: IGatsbyImageData;
          thumbnail_alt: string;
        };
        id: string;
      }[];
    };
  };
}

/** Posts list */
export default function Posts(data: PostsProps) {
  if (!data.data.allMdx) return;

  const { nodes } = data.data.allMdx;

  return (
    <FeatureContainer id="post-preview-list">
      <MainTitle>My Posts</MainTitle>
      <SubTitle>Total ({nodes.length})</SubTitle>
      <PostDataList>
        {nodes.map(({ id, frontmatter }) => (
          <Link to={`/${frontmatter.url}`} key={id}>
            <PostPreview
              mainTitle={frontmatter.title}
              subTitle={frontmatter.subTitle}
              date={frontmatter.date}
              tag={frontmatter.tag}
              thumbnail={frontmatter.thumbnail}
              thumbnailAlt={frontmatter.thumbnail_alt}
            />
          </Link>
        ))}
      </PostDataList>
    </FeatureContainer>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 0 10rem;

  /* 810px */
  @media screen and (max-width: 50.9375em) {
    padding: 0 10%;
  }
`;

const FeatureContainer = styled(Container)`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  justify-content: center;
  padding-top: 12rem;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const SubTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 500;
`;

const PostDataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.6rem, 1fr));
  column-gap: 2rem;
  margin-top: 3.2rem;
`;
