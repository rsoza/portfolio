import { Container } from "@chakra-ui/react";
import "../css/pages.css";
import {
  Footer,
  Header
} from "./ProjectParts";

function SchoolDetailPage({ school }) {
  console.log(school);
  return (
    <Container>
      <Header projectName={school.projectName} />
          
      <Footer />
    </Container>
  );
}

export default SchoolDetailPage;
