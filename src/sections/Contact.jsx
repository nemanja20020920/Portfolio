import { Field, Formik } from 'formik';
import {
  Box,
  Container,
  PrimaryButton,
  SectionWrapper,
} from '../style/Global.styled';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import colors from '../style/Variables';
import { ContactForm } from '../style/Contact.styled';
import { motion } from 'framer-motion';
import {
  fadeDownVariants,
  fadeInVariants,
  slideInLeft,
} from '../utils/FramerVariants';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const inputs = [
  {
    label: 'First Name',
    name: 'firstName',
    validate: 'validateName',
  },
  {
    label: 'Last Name',
    name: 'lastName',
    validate: 'validateName',
  },
  {
    label: 'Email',
    name: 'email',
    validate: 'validateEmail',
  },
];

const Contact = ({ contactRef }) => {
  //Functions
  const validateName = (value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue || trimmedValue.length < 3) {
      return 'Name has to be at least 3 characters long!';
    }

    if (trimmedValue.length > 20) {
      return 'Name should be less than 21 characters long!';
    }

    return null;
  };

  const validateEmail = (value) => {
    const trimmedValue = value.trim();

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(trimmedValue))
      return 'Enter a valid email address e.g. someone@email.com';
    return null;
  };

  const validateMessage = (value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return 'Message is required!';
    }

    return null;
  };

  //Hooks
  const toast = useToast();

  //Onload
  useEffect(() => {
    emailjs.init(`${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`);
  }, []);

  //Handlers
  const submitHandler = (values, { resetForm }) => {
    try {
      emailjs.send(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        {
          name: `${values.firstName.trim()} ${values.lastName.trim()}`,
          email: values.email.trim(),
          message: values.message.trim(),
        }
      );
      resetForm();
      toast({
        title: 'Email Sent Successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      toast({
        title: 'An Error occured!',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <SectionWrapper ref={contactRef} backgroundcolor={colors.lightgrey}>
      <Container>
        <Box flexdir="column" justifycontent="center" alignitems="center">
          <motion.h2
            variants={fadeDownVariants}
            initial="initial"
            whileInView="animate"
          >
            Contact me
          </motion.h2>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            }}
            onSubmit={submitHandler}
          >
            <ContactForm>
              {inputs.map((input, index) => (
                <Field
                  key={index}
                  name={input.name}
                  validate={eval(input.validate)}
                  type="text"
                >
                  {({ field, form }) => (
                    <FormControl
                      as={motion.div}
                      variants={slideInLeft}
                      initial="initial"
                      whileInView="animate"
                      transition={{ delay: index * 0.1 }}
                      isInvalid={
                        form.errors[`${input.name}`] &&
                        form.touched[`${input.name}`]
                      }
                    >
                      <FormLabel>{input.label}</FormLabel>
                      <Input {...field} placeholder={`${input.label}...`} />
                      <FormErrorMessage>
                        {form.errors[`${input.name}`]}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              ))}
              <Field name="message" validate={validateMessage}>
                {({ field, form }) => (
                  <FormControl
                    as={motion.div}
                    variants={slideInLeft}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.4 }}
                    isInvalid={form.errors.message && form.touched.message}
                  >
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      size="md"
                      {...field}
                      placeholder="Enter a message..."
                    />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <PrimaryButton
                as={motion.button}
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.5 }}
                display="block"
                alignself="center"
                type="submit"
                margin={{ base: '20px auto' }}
              >
                Submit
              </PrimaryButton>
            </ContactForm>
          </Formik>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default Contact;
