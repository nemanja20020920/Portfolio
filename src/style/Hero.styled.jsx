import styled from 'styled-components';
import { Box, Container } from './Global.styled';
import { breakpoints } from './Variables';

export const HeroBox = styled(Box)`
  justify-content: flex-end;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.md}) {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`;

export const HeroContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  height: fit-content;
  gap: 50px;
  padding-top: 100px;

  @media only screen and (min-width: ${breakpoints.md}) {
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    gap: 0;
    padding-top: 0;
  }
`;
