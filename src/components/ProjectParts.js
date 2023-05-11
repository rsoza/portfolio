import { motion } from "framer-motion";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import "../css/pages.css";
import { useEffect, useRef, useState } from "react";

const Header = (props) => {
  return (
    <motion.div
      initial={{ y: -900 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        background="var(--body_color)"
        opacity="0.98"
        height="65vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Text className="h1" color="var(--body_background)">
              {props.projectName}
            </Text>
          </motion.div>
        </Center>
      </Box>
    </motion.div>
  );
};

const Description = (props) => {
  return (
    <>
      <Center pb="15" pt="40">
        <Box maxWidth="75%" ml="auto" mr="auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Text
              fontFamily="Cormorant"
              fontSize="2.6vh"
              display="flex"
              fontWeight="300"
              lineHeight="1.7"
            >
              {props.description}
            </Text>
          </motion.div>
        </Box>
      </Center>
      <Center>
        <Flex
          maxWidth="80%"
          display="flex"
          pb="30"
          m="auto auto 14px"
          flexWrap="wrap"
        >
          <Box p="20">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <Heading className="smallHeading">Role</Heading>
            </motion.div>
            <Text className="text">{props.role}</Text>
          </Box>
          <Box p="20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.5 }}
            >
              <Heading className="smallHeading">Tech Stack</Heading>
            </motion.div>
            <Text className="text">{props.tech}</Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
};

const PhotoCarousel = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  var photos = props.pictures;
  var photoArray = photos.split(", ");

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {photoArray.map((photo) => {
            return (
              <motion.div key={photo}>
                <img src={photo} className="item" alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <Center pt="40" pb="40">
        <Box maxWidth="75%" ml="auto" mr="auto">
          <Text
            fontSize="2vh"
            display="flex"
            lineHeight="1.7"
            className="quote"
          >
            {props.description}
          </Text>
        </Box>
      </Center>
    </>
  );
};

const Gif = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        exit={{ opacity: 0, x: 50, transition: { type: "spring" } }}
      >
        <Center pb="20">
          <Box>
            <img className="animated-gif" src={props.gif} alt="gif" />
          </Box>
        </Center>
      </motion.div>
      <Box>
        <Text display="block" className="text" p="20" lineHeight="1.3">
          {props.description}
        </Text>
      </Box>
    </>
  );
};

const Footer = (props) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      paddingTop="100"
    >
      <Box
        background="var(--body_color)"
        opacity="0.98"
        height="65vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Text className="h1" color="var(--body_background)">
              End.
            </Text>
          </motion.div>
        </Center>
      </Box>
    </motion.div>
  );
};

export { Header, Description, Gif, Footer, PhotoCarousel };
