import styled from 'styled-components';
import { Container } from './Global.styled';
import colors, { breakpoints } from './Variables';

export const EducationContainer = styled(Container)`
  flex-direction: 'column';
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: ${(props) => props.flexdirection};
    align-items: ${(props) => props.alignitems};
    justify-content: ${(props) => props.justifycontent};
  }
`;

export const SingleItem = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  gap: 10px;
  text-align: left;

  @media only screen and (min-width: ${breakpoints.md}) {
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const IconWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media only screen and (min-width: ${breakpoints.md}) {
    gap: 10px;
  }
`;

export const SingleItemHeading = styled.p`
  font-size: 20px;

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 25px;
  }

  span.bold {
    font-weight: 600;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  color: ${colors.grey};
  height: 2px;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 85%;
  }
`;

export const SingleItemParagraph = styled.p`
  color: ${colors.grey};
`;
