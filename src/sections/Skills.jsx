import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  SiMysql,
  SiStyledcomponents,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import {
  Box,
  Container,
  GreyParagraph,
  SectionWrapper,
} from '../style/Global.styled';
import { IconWrapper, IconsWrapper, SkillLevel } from '../style/Skills.styled';
import colors from '../style/Variables';
import { Icon } from '@chakra-ui/react';
import { IoLogoJavascript } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { fadeDownVariants, fadeInVariants } from '../utils/FramerVariants';

const Skills = ({ skillsRef }) => {
  const skills = [
    {
      icon: FaHtml5,
      level: '100%',
    },
    {
      icon: FaCss3,
      level: '100%',
    },
    {
      icon: FaSass,
      level: '100%',
    },
    {
      icon: IoLogoJavascript,
      level: '100%',
    },
    {
      icon: FaGitAlt,
      level: '100%',
    },
    {
      icon: FaReact,
      level: '100%',
    },
    {
      icon: SiStyledcomponents,
      level: '100%',
    },
    {
      icon: FaNode,
      level: '60%',
    },
    {
      icon: SiExpress,
      level: '60%',
    },
    {
      icon: SiMongodb,
      level: '50%',
    },
    {
      icon: FaPhp,
      level: '50%',
    },
    {
      icon: SiMysql,
      level: '50%',
    },
  ];

  return (
    <SectionWrapper ref={skillsRef} backgroundcolor={colors.lightgrey}>
      <Container>
        <Box
          flexbasis="100%"
          justifycontent="center"
          flexdir="column"
          alignitems="center"
          gap={{ base: '20px', md: '30px' }}
        >
          <motion.h2
            variants={fadeDownVariants}
            initial="initial"
            whileInView="animate"
          >
            Skills
          </motion.h2>
          <GreyParagraph
            as={motion.p}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            textalign="center"
            maxwidth="75%"
          >
            My skills include a lot of programming languages, but I am best at
            JavaScript. I am currently working with React using SASS with Styled
            Components, Redux Toolkit for state management and React Router for
            SPA routing. I know how to work with Git VCS. I worked with Ant
            design but i like Chakra UI more, I also know React Bootstrap. I am
            learning backend with Node.js and Express.js using a MongoDB
            database. I am ready and open to learn new things in the future.
            Some of my plans for future are to learn Next.js and Python Django
            for backend (mostly because of AI).
          </GreyParagraph>

          <IconsWrapper>
            {skills.map((skill, index) => (
              <IconWrapper
                key={index}
                as={motion.div}
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                transition={{ delay: index * 0.1 }}
              >
                <Icon boxSize={50} as={skill.icon} />
                <SkillLevel>{skill.level}</SkillLevel>
              </IconWrapper>
            ))}
          </IconsWrapper>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default Skills;
