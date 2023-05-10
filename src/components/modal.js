import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "../css/pages.css";

function ModalComponent(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {props.projects.map((project) => (
        <div>
          <Button
            _hover={{ opacity: "0.5" }}
            border="transparent"
            background="transparent"
            onClick={onOpen}
          >
            <div className="project_label">
              <h1 className="h1">{project.projectName}</h1>
              <h2 className="h2">
                {project.projectYear} / {project.projectType} /{" "}
                {project.projectLanguages}
              </h2>
            </div>
          </Button>
          <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
            <ModalOverlay backdropFilter="blur(2px) hue-rotate(90deg)" />
            <ModalContent className="modal">
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton
                w="5%"
                border="transparent"
                background="transparent"
              />
              <ModalBody p="20" alignItems="center" justifyContent="center">
                <span>HELKLOFDSKFLDSJNFLK FJDMKSLFJKLDSF JFKDS;LJFKLDS</span>
                <img className="animated-gif" src={project.gif1} alt="GIF1" />
                <img className="animated-gif" src={project.gif2} alt="GIF2" />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      ))}
    </>
  );
}

export default ModalComponent;
