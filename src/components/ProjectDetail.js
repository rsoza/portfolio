import { Container } from "@chakra-ui/react";
import "../css/pages.css";
import {
  Description,
  Footer,
  Gif,
  Header,
  PhotoCarousel,
} from "./ProjectParts";

function ProjectDetailsPage({ project, isOpen }) {
  console.log(project);
  return (
    <Container>
      <Header projectName={project.projectName} />

          <Description
            description={project.description}
            tech={project.techStack}
            role={project.role}
          />
          <PhotoCarousel
            pictures={project.pictures}
            description={project.pictureDescription}
          />
          <Gif gif={project.gif1} description={project.gif1Description} />
   
      <Footer />
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
