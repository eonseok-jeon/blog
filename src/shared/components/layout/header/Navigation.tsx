import React from 'react';
import { NAV_ITEMS } from '@constants/NAV_ITEMS';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useState } from 'react';

interface SubNavItemsProps {
  isSubItemsOpen: string;
  label: string;
  subItems: string[] | undefined;
}

function SubNavItems({ isSubItemsOpen, label, subItems }: SubNavItemsProps) {
  return (
    <>
      <Wrapper>
        {isSubItemsOpen === label &&
          subItems?.map((subItem) => (
            <SubNavItem data-hover={subItem}>
              <Link to="#">{subItem}</Link>
            </SubNavItem>
          ))}
      </Wrapper>
    </>
  );
}

/** Header Nav Bar */
export default function Navigation() {
  const [isSubItemsOpen, setIsSubItemsOpen] = useState('');

  return (
    <nav>
      <NavList>
        {NAV_ITEMS.map(({ label, subItems }) => (
          <NavItem
            onMouseEnter={() => setIsSubItemsOpen(label)}
            onMouseLeave={() => setIsSubItemsOpen('')}
          >
            <Link to="#">{label}</Link>
            <SubNavItems
              isSubItemsOpen={isSubItemsOpen}
              label={label}
              subItems={subItems}
            />
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
}

const NavList = styled.ol`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;

const NavItem = styled.li`
  position: relative;
  padding: 0.2rem 0;

  &::before,
  &::after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 0.2rem;
    content: '';
    background: #000;
    transition: all 0.3s;
  }

  &::before {
    right: 0;
    top: -0.2rem;
  }

  &::after {
    left: 0;
    bottom: 0;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    width: 100%;
  }
`;

const Wrapper = styled.ol`
  position: absolute;
  left: -0.5rem;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: center;
  margin-top: 2.36rem;
  padding-top: 0.7rem;
  border-radius: 0.5rem;
`;

const SubNavItem = styled.li`
  position: relative;
  padding: 0.5rem 1.2rem 0.5rem 0.5rem;
  color: #000;
  border-radius: 0.5rem;
  text-shadow: none;
  word-break: g keep-all;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #999;
    background-color: #000;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    max-width: 0;
    opacity: 0;
    padding: 0.5rem 1.2rem 0.5rem 0.5rem;
    content: attr(data-hover);
    color: #fff;

    -webkit-transition: max-width 0.8s ease-out;
    -moz-transition: max-width 0.8s ease-out;
    transition: max-width 0.8s ease-out;
  }

  &:hover::before,
  &:focus::before {
    max-width: 100%;
    opacity: 1;
  }
`;
