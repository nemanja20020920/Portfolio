import styled from 'styled-components';
import { breakpoints, colors } from './Variables';
import { IconButton } from '@chakra-ui/react';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: visible;
`;

export const Logo = styled.a`
  position: relative;
  text-decoration: none;
  color: ${colors.black};
  font-size: 25px;
  margin-right: 25px;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 30px;
    margin-right: 30px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    background-color: ${colors.black};
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  &::before {
    right: 100%;
    transform: translate(-50%, -50%);
  }

  &::after {
    left: 100%;
    transform: translate(50%, -50%);
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
  font-size: 20px;
  /* margin: 0 10px; */

  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0%;
  right: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.lightgrey};
  height: 100%;
  padding-top: 50px;
  width: 70%;
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.md}) {
    position: relative;
    display: flex !important;
    flex-direction: row;
    background-color: transparent;
    padding-top: 0;
    width: fit-content;
    gap: 10px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 25px;
  }
`;

export const HamburgerBtn = styled(IconButton)`
  display: block;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: none !important;
  }
`;
