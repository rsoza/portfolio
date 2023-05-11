import { motion } from "framer-motion";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import "../css/pages.css";

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
        pb='30'
        m="auto auto 14px"
        flexWrap="wrap"
      >
        <Box p="10">
          <Heading className="smallHeading">Role</Heading>
          <Text className="text">{props.role}</Text>
        </Box>
        <Box p="10">
          <Heading className="smallHeading">Tech Stack</Heading>
          <Text className="text">{props.tech}</Text>
        </Box>
      </Flex>
      </Center>

    </>
  );
};

const Gif = (props) => {
  console.log("here", props.description)
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        exit={{ opacity: 0, x: 50, transition: { type: "spring" } }}
        whileTap={{ scale: 1.7, x: 60 }}
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

export { Header, Description, Gif };
