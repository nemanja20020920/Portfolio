import {
  Avatar,
  Box,
  GreyParagraph,
  PrimaryButton,
  SecondaryButton,
  SectionWrapper,
} from '../style/Global.styled';
import avatar from '../assets/img/avatar.png';
import { HeroContainer } from '../style/Hero.styled';
import { motion } from 'framer-motion';
import { fadeInVariants, fadeUpVariants } from '../utils/FramerVariants';

const Hero = ({ heroRef, onAbout, onContact }) => {
  return (
    <SectionWrapper ref={heroRef}>
      <HeroContainer>
        <Box
          flexbasis={{ base: '100%', md: '50%' }}
          flexdir="column"
          alignitems={{ base: 'center', md: 'flex-start' }}
        >
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.5, ease: 'linear' }}
          >
            <Avatar
              src={avatar}
              alt="Frontend Web Developer, Nemanja Djakovic"
            />
          </motion.div>
          <motion.h1
            variants={fadeUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 1, ease: 'linear' }}
            style={{ textAlign: 'center' }}
          >
            Hello! I&apos;m Nemanja!
          </motion.h1>
        </Box>
        <Box
          flexbasis={{ base: '100%', md: '50%' }}
          flexdir="column"
          alignitems={{ base: 'center', md: 'flex-start' }}
          textalign={{ base: 'center', md: 'left' }}
        >
          <motion.h2
            variants={fadeUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 1, ease: 'linear' }}
            style={{ maxWidth: '80%' }}
          >
            A React Frontend Web Developer based in Subotica, Serbia
          </motion.h2>

          <GreyParagraph
            as={motion.p}
            variants={fadeUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 1, ease: 'linear' }}
            margintop="30px"
            marginbottom="50px"
          >
            Passionate in creating great experiences for Digital Products
          </GreyParagraph>
          <div>
            <PrimaryButton
              as={motion.button}
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.6, ease: 'linear' }}
              display={{ base: 'block', md: 'inline-block' }}
              margin={{ base: '0 auto 25px auto', md: '0 40px 0 0' }}
              onClick={onAbout}
              type="button"
            >
              About me
            </PrimaryButton>
            <SecondaryButton
              as={motion.button}
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.7, ease: 'linear' }}
              display={{ base: 'block', md: 'inline-block' }}
              onClick={() => onContact()}
            >
              Contact me
            </SecondaryButton>
          </div>
        </Box>
      </HeroContainer>
    </SectionWrapper>
  );
};

export default Hero;
