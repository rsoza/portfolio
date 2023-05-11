import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import "../css/pages.css";
import React, { useState, useEffect } from "react";
import { getGifs } from "../utils/Firestore";
import { motion } from "framer-motion";
import { AnimatedTextWord } from "../accessories/Animation";
import ProjectDetailsPage from "./ProjectDetail";
import { ArrowBackIcon } from "@chakra-ui/icons";

function ModalComponent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = useState([]);
  const [timeoutSet, setTheTimeOut] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsInfo = await getGifs();
      setProjects(projectsInfo);
    };
    fetchProjects();

    if (isOpen) {
      const timeOut = setTimeout(() => {
        setTheTimeOut(true);
      }, 400);
      return () => clearTimeout(timeOut);
    }

    return () => {};
  }, [isOpen]);

  const onCloseTimeout = () => {
    setSelectedProject(null);
    setTheTimeOut(null);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <>
      {projects.map((project) => (
        <motion.div
          textAlign="right"
          whileHover={{ x: -5 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            display="block"
            border="transparent"
            background="transparent"
            onClick={() => {
              setSelectedProject(project);
              onOpen();
            }}
          >
            <Text className="h1">
              <AnimatedTextWord text={project.projectName} />
            </Text>
            <Text className="h2">
              {project.projectYear} / {project.projectType} /
              {project.projectLanguages}
            </Text>
          </Button>
        </motion.div>
      ))}
      <div className="modal">
        <div className="modal-dialog">
          <Modal onClose={onCloseTimeout} isOpen={isOpen}>
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
            {timeoutSet && (
              
              <ModalContent maxH="99vh">
                <ModalCloseButton
                  border="transparent"
                  background="var(--container)"
                  color="var(--body_color)"
                  fontFamily="Cormorant"
                  fontWeight="500"
                  fontSize="16px"
                  justifyContent="left"
                  p="30"
                  textTransform="uppercase"
                  >
                  <motion.div
                    textAlign="right"
                    whileHover={{ x: -5 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    >
                    <ArrowBackIcon mr="20" />
                    back to projects
                  </motion.div>
                </ModalCloseButton>
                
                <ModalBody overflowX="hidden">
                  <ProjectDetailsPage
                    project={selectedProject}
                    isOpen={isOpen}
                    />
                </ModalBody>
              </ModalContent>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
