import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ABOUT_ME } from '../constants/ABOUT_ME';

/** 랜딩 페이지 */
export default function Landing() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % ABOUT_ME.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1>안녕하세요!</h1>
      <TextWrapper>
        <span>저는</span>
        {ABOUT_ME.filter((_, idx) => idx === currentTextIndex).map(
          ({ text, color }) => (
            <RollingText key={text} color={color}>
              {text.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </RollingText>
          ),
        )}
      </TextWrapper>
    </Container>
  );
}

const liftUp = keyframes`
  0% {
    transform: translateY(-4rem);
    opacity: 0;
  }

  20% {
    transform: translateY(0);
    opacity: 1;
  }
  
  70% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(4rem);
    opacity: 0;
  }
`;

const Container = styled.section`
  font-size: 7rem;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 12rem;
  transform: translateY(-4rem);

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    font-size: 3rem;
  }

  /* 380px */
  @media screen and (max-width: 23.75em) {
    font-size: 2rem;
  }
`;

const TextWrapper = styled.p`
  display: flex;
  gap: 4rem;
  align-items: center;

  /* 794px */
  @media screen and (max-width: 62.5em) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const RollingText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  animation: ${liftUp} 4s ease-out infinite;
  color: ${({ color }) => color};

  span {
    animation: ${liftUp} 4s ease-out infinite;
    animation-fill-mode: backwards;
    opacity: 0;
  }
`;
