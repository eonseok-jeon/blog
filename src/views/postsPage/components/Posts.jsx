import styled from '@emotion/styled';
import PostPreview from './PostPreview';

/** Posts list */
export default function Posts(data) {
  if (!data.data.allMdx) return;

  const { nodes } = data.data.allMdx;

  return (
    <Container>
      <PostsCount>Total ({nodes.length})</PostsCount>
      <PostDataList>
        {nodes.map(({ id, frontmatter }) => (
          <PostPreview
            key={id}
            mainTitle={frontmatter.title}
            subTitle={frontmatter.subTitle}
            date={frontmatter.date}
            tag={frontmatter.tag}
            thumbnail={frontmatter.thumbnail}
            thumbnailAlt={frontmatter.thumbnail_alt}
          />
        ))}
      </PostDataList>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10rem 7%;

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    align-items: center;
  }
`;

const PostsCount = styled.h2`
  font-size: 3.2rem;
  font-weight: 500;
`;

const PostDataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.6rem, 1fr));
  column-gap: 2rem;
  margin-top: 3.2rem;
`;
