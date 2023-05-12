import { Container } from "@chakra-ui/react";
import "../css/pages.css";
import {
  Footer,
  Header
} from "./ProjectParts";

function WorkDetailPage({ work }) {
  console.log(work);
  return (
    <Container>
      <Header projectName={work.projectName} />
          
      <Footer />
    </Container>
  );
}

export default WorkDetailPage;
