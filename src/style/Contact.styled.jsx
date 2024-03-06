import styled from 'styled-components';
import { Form } from 'formik';
import { breakpoints } from './Variables';

export const ContactForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 10px;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 40%;
    gap: 25px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 50%;
    gap: 25px;
  }
`;
