import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Container } from '../style/Global.styled';
import {
  HamburgerBtn,
  Logo,
  Nav,
  NavbarLink,
  NavbarWrapper,
} from '../style/Navbar.styled';
import { fadeDownVariants } from '../utils/FramerVariants';
import { useState } from 'react';

const links = [
  {
    label: 'About me',
    method: 'about',
    delay: 0,
  },
  {
    label: 'Skills',
    method: 'skills',
    delay: 0.1,
  },
  {
    label: 'Recommendation',
    method: 'recomendation',
    delay: 0.2,
  },
  {
    label: 'Contact',
    method: 'contact',
    delay: 0.3,
  },
];

const Navbar = ({ onHero, onAbout, onSkills, onRecommendation, onContact }) => {
  //State
  const [navOpen, setNavOpen] = useState(false);
  //Variables
  const methods = {
    hero: onHero,
    about: onAbout,
    skills: onSkills,
    recomendation: onRecommendation,
    contact: onContact,
  };

  //Functions
  const linkClickHandler = (method) => {
    setNavOpen(false);
    methods[method]();
  };

  return (
    <NavbarWrapper>
      <Container
        alignitems="center"
        justifycontent={{ base: 'space-between', md: 'flex-start' }}
      >
        <Logo
          as={motion.a}
          variants={fadeDownVariants}
          initial="initial"
          whileInView="animate"
          onClick={onHero}
        >
          Nemanja&apos;s Portfolio
        </Logo>
        <Nav style={{ display: navOpen ? 'flex' : 'none' }}>
          {links.map((link, index) => (
            <NavbarLink
              key={index}
              as={motion.a}
              variants={fadeDownVariants}
              initial="initial"
              whileInView="animate"
              transition={{ delay: link.delay }}
              onClick={() => linkClickHandler(link.method)}
            >
              {link.label}
            </NavbarLink>
          ))}
        </Nav>
        <HamburgerBtn
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          aria-label="Search database"
          icon={navOpen ? <GrClose /> : <GiHamburgerMenu />}
          onClick={() => setNavOpen((prevVal) => !prevVal)}
        />
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
