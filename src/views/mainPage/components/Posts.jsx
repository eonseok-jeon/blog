import styled from '@emotion/styled';
import PostPreview from './PostPreview';

/** Posts list */
export default function Posts(data) {
  if (!data.data.allMdx) return;

  const { nodes } = data.data.allMdx;

  return (
    <FeatureContainer id="post-preview-list">
      <MainTitle>My Posts</MainTitle>
      <SubTitle>Total ({nodes.length})</SubTitle>
      <PostDataList>
        {nodes.map(({ id, frontmatter }) => (
          <PostPreview
            key={id}
            mainTitle={frontmatter.title}
            subTitle={frontmatter.subTitle}
            date={frontmatter.date}
            tag={frontmatter.tag}
            url={frontmatter.url}
            thumbnail={frontmatter.thumbnail}
            thumbnailAlt={frontmatter.thumbnail_alt}
          />
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