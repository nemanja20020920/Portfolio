import styled from 'styled-components';
import { GreyParagraph } from './Global.styled';
import { breakpoints } from './Variables';

export const QuoteParagraph = styled(GreyParagraph)`
  width: 90%;
  font-style: italic;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 70%;
  }
`;

export const Name = styled.h2`
  font-size: 23px;
  font-style: italic;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 28px;
  }
`;
