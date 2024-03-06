import styled from 'styled-components';
import colors, { breakpoints } from './Variables';

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;

  @media only screen and (min-height: ${breakpoints.md}) {
    gap: 20px;
    margin-top: 40px;
  }
`;

export const IconWrapper = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  @media only screen and (min-width: ${breakpoints.md}) {
    padding: 20px 40px;
  }
`;

export const SkillLevel = styled.span`
  font-size: 20px;
  color: ${colors.black};
`;
