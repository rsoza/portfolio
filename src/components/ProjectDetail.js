import { Container, Center, Flex, Box, Text } from "@chakra-ui/react";
import "../css/pages.css";
import { motion } from "framer-motion";
import {AnimatedTextWord} from "../accessories/Animation";

function ProjectDetailsPage({ project, isOpen }) {
  return (
    <Container>
      <Center p="20">
        <Flex>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box textAlign="center">
              {isOpen && (
                <Text className="h1">
                  <AnimatedTextWord text={project.projectName} />
                </Text>
              )}
            </Box>
          </motion.div>
        </Flex>
      </Center>
      <Center lineHeight="1.3" textAlign="justify" pb="15">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box maxW="700px" lineHeight="2">
            <Text className="text">{project.description}</Text>
          </Box>
        </motion.div>
      </Center>
      <Center>
        <Flex display="flex" alignItems="center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
            exit={{ opacity: 0, x: 50, transition: { type: "spring" } }}
            whileTap={{ scale: 1.7, x: 60 }}
          >
            <Box>
              <img className="animated-gif" src={project.gif1} alt="gif1" />
            </Box>
          </motion.div>
          <Box>
            <Text display="block" className="text" p="20" lineHeight="1.3">
              {project.gif1Description}
            </Text>
          </Box>
        </Flex>
      </Center>
      {/* <Spacer />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        exit={{ opacity: 0, x: 50, transition: { type: "spring" } }}
      >
        <Box>
          <img className="animated-gif" src={project.gif2} alt="gif2" />
        </Box>
      </motion.div> */}
    </Container>
  );
}

export default ProjectDetailsPage;
