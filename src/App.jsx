import GlobalStyle from './style/Global.styled';
import Hero from './sections/Hero';
import Navbar from './layout/Navbar';
import { useRef } from 'react';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Recommendation from './sections/Recommendation';
import Contact from './sections/Contact';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  //Refs
  const hero = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const recommendation = useRef(null);
  const contact = useRef(null);

  //Functions
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Navbar
          onHero={() => scrollToRef(hero)}
          onAbout={() => scrollToRef(about)}
          onSkills={() => scrollToRef(skills)}
          onRecommendation={() => scrollToRef(recommendation)}
          onContact={() => scrollToRef(contact)}
        />
        <Hero
          heroRef={hero}
          onAbout={() => scrollToRef(about)}
          onContact={() => scrollToRef(contact)}
        />
        <AboutMe aboutRef={about} />
        <Skills skillsRef={skills} />
        <Recommendation recommendationRef={recommendation} />
        <Contact contactRef={contact} />
      </ChakraProvider>
    </>
  );
}

export default App;
