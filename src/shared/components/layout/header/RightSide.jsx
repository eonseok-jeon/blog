import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

/** header right side */
export default function RightSide() {
  return (
    <nav>
      <NavList>
        <Link to="https://github.com/eonseok-jeon" target="_blank">
          <NavItem data-hover="GitHub">GitHub</NavItem>
        </Link>
        <Link to="https://www.instagram.com/___seeeok/" target="_blank">
          <NavItem data-hover="Instagram">Instagram</NavItem>
        </Link>
      </NavList>
    </nav>
  );
}

const NavList = styled.ol`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.li`
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #888;
    background-color: ${({ isDark }) => (isDark ? '#fff' : '#121212')};
    cursor: pointer;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    max-width: 0;
    opacity: 0;
    content: attr(data-hover);
    color: ${({ isDark }) => (isDark ? '#000' : '#fff')};

    -webkit-transition: max-width 0.7s ease-out;
    -moz-transition: max-width 0.7s ease-out;
    transition: max-width 0.7s ease-out;
  }

  &:hover::before,
  &:focus::before {
    max-width: 100%;
    opacity: 1;
  }
`;