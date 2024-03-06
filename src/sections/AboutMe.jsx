import { Icon, Link } from '@chakra-ui/react';
import { IoSchoolSharp } from 'react-icons/io5';
import { FaCode, FaCodeBranch } from 'react-icons/fa';
import {
  Divider,
  EducationContainer,
  IconWrapper,
  SingleItem,
  SingleItemHeading,
  SingleItemParagraph,
  TextWrapper,
} from '../style/AboutMe.styled';
import { Box, GreyParagraph, SectionWrapper } from '../style/Global.styled';
import colors from '../style/Variables';
import { motion } from 'framer-motion';
import {
  fadeDownVariants,
  fadeInVariants,
  slideInLeft,
} from '../utils/FramerVariants';

const AboutMe = ({ aboutRef }) => {
  return (
    <SectionWrapper ref={aboutRef} backgroundcolor={colors.lightgrey}>
      <EducationContainer>
        <Box
          flexbasis={{ base: '100%', md: '50%' }}
          display="flex"
          flexdir="column"
          justifycontent="center"
          alignitems="flex-start"
          textalign={{ base: 'center', md: 'left' }}
          margin={{ base: '40px 0 0 0', md: '0' }}
          gap="20px"
        >
          <motion.h2
            variants={fadeDownVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2 }}
          >
            Education
          </motion.h2>
          <SingleItem
            as={motion.div}
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2, duration: 0.5, ease: 'linear' }}
          >
            <IconWrapper>
              <Icon boxSize={25} as={IoSchoolSharp} />
            </IconWrapper>
            <TextWrapper>
              <SingleItemHeading>
                <Link href="https://www.vts.su.ac.rs/" isExternal>
                  Subotica Tech College of Applied Sciences
                </Link>
              </SingleItemHeading>
              <SingleItemParagraph>2021 - today</SingleItemParagraph>
            </TextWrapper>
          </SingleItem>

          <Divider />

          <SingleItem
            as={motion.div}
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
          >
            <IconWrapper>
              <Icon boxSize={25} as={IoSchoolSharp} />
            </IconWrapper>
            <TextWrapper>
              <SingleItemHeading>
                <Link href="https://tsis.edu.rs/sr/" isExternal>
                  &quot;Ivan Saric&quot; Technical High School in Subotica
                </Link>
              </SingleItemHeading>
              <SingleItemParagraph>2017 - 2021</SingleItemParagraph>
            </TextWrapper>
          </SingleItem>

          <motion.h2
            variants={fadeDownVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.4 }}
          >
            Experience
          </motion.h2>
          <SingleItem
            as={motion.div}
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.4, duration: 0.5, ease: 'linear' }}
          >
            <IconWrapper>
              <Icon boxSize={25} as={FaCode} />
            </IconWrapper>
            <TextWrapper>
              <SingleItemHeading>
                <Link href="https://inspiragrupa.com/" isExternal>
                  Internship at Inspira group company in Subotica
                </Link>
              </SingleItemHeading>
              <SingleItemParagraph>
                January 2023 - December 2023
              </SingleItemParagraph>
            </TextWrapper>
          </SingleItem>

          <Divider />

          <SingleItem
            as={motion.div}
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.5, duration: 0.5, ease: 'linear' }}
          >
            <IconWrapper>
              <Icon boxSize={25} as={FaCodeBranch} />
            </IconWrapper>
            <TextWrapper>
              <SingleItemHeading>
                <Link href="https://www.icbtech.io/" isExternal>
                  Internship at ICB Tech company in Subotica
                </Link>
              </SingleItemHeading>
              <SingleItemParagraph>July 2022 - August 2022</SingleItemParagraph>
            </TextWrapper>
          </SingleItem>
        </Box>
        <Box
          flexbasis={{ base: '100%', md: '50%' }}
          display="flex"
          flexdir="column"
          justifycontent="center"
          alignitems="flex-start"
          textalign={{ base: 'center', md: 'left' }}
          gap="20px"
          margin={{ base: '60px 0 0 0', md: '0' }}
        >
          <motion.h2
            variants={fadeDownVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 0.6,
            }}
          >
            About my education and experience
          </motion.h2>
          <GreyParagraph
            as={motion.p}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 0.6,
            }}
            textalign="left"
            margintop="60px"
            lineheight="1.4"
          >
            I got interested in programming at a very young age. In elementary
            school I started learning HTML and later in high school I learned C
            and C++. I gained most of my knowledge at college. In first year I
            learned a lot about algorithms and data structures using C which I
            think is very important. I also worked with Assembly, PHP, MySQL,
            C#, Java, JavaScript and Python during my studies. I took multiple
            internship opportunities and learned a lot from them. I tried to get
            an internship in Inspira group in the first year of college, but I
            failed. That didn&apos;t discourage me but opposite it motivated me
            and helped me become better. I mastered HTML and CSS and started
            learning JavaScript. Then I applied for internship in ICB Tech
            company where I got the internship and that helped me get into a
            world of creating complex frontend for web apps. After that I
            applied for internship at Inspira group again and this time I got
            the internship. In Inspira I worked on intern projects and learned a
            lot about React.js and many other frontend tools.
          </GreyParagraph>
        </Box>
      </EducationContainer>
    </SectionWrapper>
  );
};

export default AboutMe;
