import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Container,
  Center,
  Flex,
  Box,
  Text,
  Spacer,
} from "@chakra-ui/react";
import "../css/pages.css";
import React, { useState, useEffect,useRef } from "react";
import { getGifs } from "../utils/Firestore";
import { motion } from "framer-motion";

function ProjectDetailsPage({ project, isOpen }) {
  const scrollRef = useRef(null)

  return (
    <div ref={scrollRef} style={{ overflow: "scroll" }}>
    <Container
    height="50vh"
    width='auto'
    borderRadius="10%"
    bg="var(--body_background)"
    color="var(--body_color)"
    pl="10%"
    pr="10%"
    pt="2%"
    overflow="auto"
    scrollBehavior='smooth'
    >
      <Center p="20">
        <Flex>
          <Box textAlign="center">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, type:'spring' }}}
                
              >
                <Text className="h1">{project.projectName}</Text>
              </motion.div>
            )}
          </Box>
        </Flex>
      </Center>
      <Center lineHeight="1.3" textAlign="justify" pb="15">
        <Box>
          <Text fontSize="16px">{project.description}</Text>
        </Box>
      </Center>
<motion.div
     initial={{ opacity: 0, x: 50 }}
     whileInView={{ opacity: 1, x: 0, transition: { type:'spring' }}}
     exit={{opacity:0, x: 50, transition: { type:'spring' } }}
>

      <Box>
        <img className="animated-gif" src={project.gif1} alt="gif1" />
      </Box>
</motion.div>
      <Spacer />
<motion.div
     initial={{ opacity: 0, x: 50 }}
     whileInView={{ opacity: 1, x: 0, transition: { type:'spring' }}}
     exit={{opacity:0, x: 50, transition: { type:'spring' } }}
>
      <Box>
        <img className="animated-gif" src={project.gif2} alt="gif2" />
      </Box>
  </motion.div>
    </Container>
  </div>
  );
}

function ModalComponent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsInfo = await getGifs();
      setProjects(projectsInfo);
    };
    fetchProjects();

    return () => {};
  }, []);

  return (
    <>
      {projects.map((project) => (
        <motion.div
          whileHover={{ x: -5 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { type:'spring' }}}
          exit={{opacity:0, x: 50, transition: { type:'spring' } }}
        >
          <Button
            display="inline-block"
            textAlign="right"
            border="transparent"
            background="transparent"
            onClick={() => {
              setSelectedProject(project);
              onOpen();
            }}
          >
            <Text className="h1">{project.projectName}</Text>

            <Text className="h2">
              {project.projectYear} / {project.projectType} /{" "}
              {project.projectLanguages}
            </Text>
          </Button>
        </motion.div>
      ))}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(2px) hue-rotate(90deg)" />
        <ModalContent className="modal">
          <ModalBody p="20" alignItems="center" justifyContent="center">
          <ModalCloseButton
            w="100%"
            height='auto'
            color='transparent'
            border="transparent"
            background="transparent"
          />
            <ProjectDetailsPage project={selectedProject} isOpen={isOpen} />
          <ModalCloseButton
             w="100%"
             height='100%'
             color='transparent'
            border="transparent"
            background="transparent"
          />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
