import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

/** Post Preview Card */
export default function PostPreview({
  mainTitle,
  subTitle,
  date,
  tag,
  url,
  thumbnail,
  thumbnailAlt,
}) {
  const image = getImage(thumbnail);

  return (
    <>
      <Article to={`/${url}`}>
        <ImgWrapper>
          <GatsbyImage image={image} alt={thumbnailAlt} />
          <Tag>{tag}</Tag>
        </ImgWrapper>
        <InfoWrapper>
          <MainTitle>{mainTitle}</MainTitle>
          <SubTitle>{subTitle}</SubTitle>
          <Date>{date}</Date>
        </InfoWrapper>
      </Article>
    </>
  );
}

const Article = styled(Link)`
  width: 27.9rem;
  margin-bottom: 7rem;
  padding: 0.8rem;
  border: 3px solid #888;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: contain;
  background-color: ${({ theme }) => theme.reverseBackground};
  border-radius: 1.2rem;
  overflow: hidden;

  img {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    height: 16rem;
    object-fit: contain;
  }
`;

const Tag = styled.div`
  position: absolute;
  left: 0.8rem;
  bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.6rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.8rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  margin-top: 0.8rem;
`;

const MainTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  color: #aaa;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Date = styled.p`
  margin-left: auto;
  color: #777;
`;
