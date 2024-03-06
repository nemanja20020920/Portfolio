import styled, { createGlobalStyle } from 'styled-components';
import { breakpoints, colors } from './Variables';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: all .3s ease-in-out;
  }

  html {
    font-family: "Open Sans", sans-serif;

    @media only screen and (min-width: ${breakpoints.md}) {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    position: relative;
  }

  section {
    min-height: 100vh;
    scroll-snap-align: center;
    padding: 20px 0;

    @media only screen and (min-width: ${breakpoints.md}) {
    height: 100vh;
    }
  }

  h1 {
    font-size: 40px;
    color: ${colors.black};
    line-height: 1.5;
    font-weight: 500;

    @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 50px;
    }

    @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 65px;
    }
  }

  h2 {
    font-size: 30px;
    color: ${colors.black};
    line-height: 1.25;
    font-weight: 500;

    @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 35px;
    }
    
    @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 40px;
    }
  }
`;

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  background-color: ${(props) => props.backgroundcolor};
  justify-content: ${(props) => props.justifycontent ?? 'center'};
  align-items: ${(props) => props.alignItems ?? 'center'};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.justifycontent?.base ?? props.justifycontent ?? 'center'};
  align-items: ${(props) =>
    props.alignitems?.base ?? props.alignitems ?? 'center'};
  flex-direction: ${(props) => props.flexdir};
  max-width: min(1440px, 90%);
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${breakpoints.md}) {
    justify-content: ${(props) =>
      props.justifycontent?.md ?? props.justifycontent ?? 'center'};
    align-items: ${(props) =>
      props.alignitems?.md ?? props.alignitems ?? 'center'};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-basis: ${(props) => props.flexbasis?.base ?? props.flexbasis};
  flex-direction: ${(props) => props.flexdir};
  text-align: ${(props) => props.textalign?.base ?? props.textalign};
  align-items: ${(props) => props.alignitems?.base ?? props.alignitems};
  justify-content: ${(props) =>
    props.justifycontent?.base ?? props.justifycontent};
  margin: ${(props) => props.margin?.base ?? props.margin};
  width: 80%;
  gap: ${(props) => props.gap?.base};

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-basis: ${(props) => props.flexbasis?.md};
    justify-content: ${(props) => props.justifycontent?.md};
    align-items: ${(props) => props.alignitems?.md};
    text-align: ${(props) => props.textalign?.md};
    margin: ${(props) => props.margin?.md};
    gap: ${(props) => props.gap?.md};
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-basis: ${(props) => props.flexbasis?.lg};
    justify-content: ${(props) => props.justifycontent?.lg};
    align-items: ${(props) => props.alignitems?.lg};
    text-align: ${(props) => props.textalign?.lg};
    margin: ${(props) => props.margin?.lg};
    gap: ${(props) => props.gap?.lg};
  }
`;

export const GreyParagraph = styled.p`
  color: ${colors.grey};
  font-size: 17px;
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  text-align: center;
  line-height: ${(props) => props.lineheight};

  @media only screen and (min-width: ${breakpoints.md}) {
    text-align: ${(props) => props.textalign};
    font-size: 18px;
    max-width: ${(props) => props.maxwidth};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 22px;
  }
`;

export const Avatar = styled.img`
  width: 130px;
  height: 130px;
  clip-path: circle(40%);
  object-fit: cover;
  object-position: right center;
`;

export const Button = styled.button`
  display: ${(props) => props.display?.base};
  margin: ${(props) => props.margin?.base ?? '0 auto'};
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    display: ${(props) => props.display?.md};
    margin: ${(props) => props.margin?.md};
    padding: 10px 25px;
    font-size: 22px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: ${(props) => props.display?.lg};
    margin: ${(props) => props.margin?.lg};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${colors.black};
  color: ${colors.white};
  border: 2px solid ${colors.black};

  &:hover {
    transform: scale(1.1);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.black};
  border: 2px solid ${colors.grey};

  &:hover {
    background-color: ${colors.grey};
  }
`;

export default GlobalStyle;
