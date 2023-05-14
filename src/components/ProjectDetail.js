import { Container } from "@chakra-ui/react";
import "../css/pages.css";
import {
  Description,
  Footer,
  Gif,
  Header,
  PhotoCarousel,
  SkillsDev,
} from "./ProjectParts";

function ProjectDetailsPage({ project }) {
  return (
    <Container>
      <Header projectName={project.projectName} />
          <Description
            description={project.description}
            tech={project.techStack}
            role={project.role}
          />
          { !!project.pictures &&
            <PhotoCarousel
            pictures={project.pictures}
            description={project.pictureDescription}
            />
          }
          { !!project.gif1 &&

            <Gif gif={project.gif1} description={project.gif1Description} />
          }
          <SkillsDev skills={project.skills} />
          { !!project.gif2 &&

            <Gif gif={project.gif2} description={project.gif2Description} />
          }
      <Footer />
    </Container>
  );
}

export default ProjectDetailsPage;
