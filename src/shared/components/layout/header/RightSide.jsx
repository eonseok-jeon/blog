import React from 'react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { RIGHT_NAV_ITEMS } from '../../../constants/RIGHT_NAV_ITEMS';
import { css } from '@emotion/react';

/** header right side */
export default function RightSide({ showMenu }) {
  return (
    <Nav showMenu={showMenu}>
      <NavList>
        {RIGHT_NAV_ITEMS.map(({ label, link }) => (
          <OutboundLink href={link} target="_blank" key={`${label}-${link}`}>
            <NavItem data-hover={label}>{label}</NavItem>
          </OutboundLink>
        ))}
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  display: inline-block;

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    background-color: rgba(3, 3, 3, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 50vh;
    left: 0;
    width: 100%;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;
    padding-bottom: 20rem;
    z-index: 2;

    ${({ showMenu }) =>
      showMenu
        ? css`
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transform: translateX(0);
          `
        : css`
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
            transform: translateX(100%);
          `}
  }
`;

const NavList = styled.ol`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  list-style: none;

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    flex-direction: column;
    gap: 6rem;
  }
`;

const NavItem = styled.li`
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.lightText};
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    max-width: 0;
    opacity: 0;
    content: attr(data-hover);
    color: ${({ theme }) => theme.text};

    -webkit-transition: max-width 0.7s ease-out;
    -moz-transition: max-width 0.7s ease-out;
    transition: max-width 0.7s ease-out;
  }

  &:hover::before,
  &:focus::before {
    max-width: 100%;
    opacity: 1;
  }

  /* 665px */
  @media screen and (max-width: 41.5625em) {
    color: #fff;

    &:hover {
      color: #777;
    }

    &::before {
      color: #fff;
    }
  }
`;
