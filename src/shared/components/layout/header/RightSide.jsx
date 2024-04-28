import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { RIGHT_NAV_ITEMS } from '../../../constants/RIGHT_NAV_ITEMS';

/** header right side */
export default function RightSide() {
  return (
    <nav>
      <NavList>
        {RIGHT_NAV_ITEMS.map(({ label, link }) => (
          <Link to={link} target="_blank">
            <NavItem data-hover={label}>{label}</NavItem>
          </Link>
        ))}
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
