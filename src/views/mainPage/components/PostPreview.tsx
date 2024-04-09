import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { DarkModeContext } from '@contexts/darkModeContext';

interface IPostPreviewProps {
  mainTitle: string;
  subTitle: string;
  date: string;
  tag: string;
}

/** Post Preview Card */
export default function PostPreview({
  mainTitle,
  subTitle,
  date,
  tag,
}: IPostPreviewProps) {
  const isDark = useContext(DarkModeContext);

  return (
    <>
      <Article>
        <ImgWrapper>
          <StaticImage
            src="../assets/egg_princess.png"
            alt="post-img"
            width={240}
            height={160}
          />
          <Tag isDark={isDark}>{tag}</Tag>
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

const Article = styled.article`
  width: 25.6rem;
  height: 25.6rem;
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

  img {
    border-radius: 1.2rem;
  }
`;

const Tag = styled.div<{ isDark: boolean }>`
  position: absolute;
  left: 0.8rem;
  bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  background-color: ${({ isDark }) => (isDark ? '#121212' : '#fff')};
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
