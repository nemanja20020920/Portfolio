import { Avatar } from '@chakra-ui/react';
import { Box, Container, SectionWrapper } from '../style/Global.styled';
import colors from '../style/Variables';
import { Name, QuoteParagraph } from '../style/Recommendation.styled';
import { motion } from 'framer-motion';
import { fadeInVariants, fadeUpVariants } from '../utils/FramerVariants';
import profesor from '../assets/img/profesor.png';

const Recommendation = ({ recommendationRef }) => {
  return (
    <SectionWrapper ref={recommendationRef} backgroundcolor={colors.lightgrey}>
      <Container>
        <Box
          flexbasis="100%"
          justifycontent="center"
          alignitems="center"
          flexdir="column"
          gap={{ base: '20px', md: '50px' }}
        >
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
          >
            <Avatar size="xl" src={profesor} />
          </motion.div>
          <QuoteParagraph
            as={motion.p}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
          >
            &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            consequatur maiores cumque sed officiis incidunt, commodi
            perferendis molestiae nihil alias impedit ducimus dolore illum
            dolorem! Magnam optio alias neque tenetur eos soluta modi eum rerum
            illo officia repellendus quam, ratione nisi ducimus dolor hic ipsa
            doloremque saepe facilis animi, perspiciatis delectus! Eum
            voluptatum harum enim in. Maxime nihil esse cumque aspernatur culpa
            illo quis inventore, libero voluptatibus odio perferendis magnam
            reprehenderit cum eaque quia sequi dolores facilis blanditiis
            provident velit dolorem. Dolores atque blanditiis ad illum suscipit
            ex tempore autem, molestias illo sapiente.&quot;
          </QuoteParagraph>
          <Name
            as={motion.h2}
            variants={fadeUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2 }}
          >
            Prof. Dr. Zlatko Covic
          </Name>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default Recommendation;
