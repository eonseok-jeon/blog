import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import IcSleepingMan from '@assets/icSleepingMan.svg';
import IcWorkingMan from '@assets/icWorkingMan.svg';

/** Home page logo */
export default function Logo() {
  const randomNumber = Math.floor(Math.random() * 2);
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
    <Container to="/">
      <LogoWrapper>
        {randomNumber === 0 && <IcSleepingMan />}
        {randomNumber === 1 && <IcWorkingMan />}
        <Title>{data.site.siteMetadata.title}</Title>
      </LogoWrapper>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & svg {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
`;

const Title = styled.h1`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
`;
