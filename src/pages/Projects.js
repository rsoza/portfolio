import ModalComponent from "../components/modal";
import "../css/pages.css";
import { motion } from "framer-motion";

function Projects() {

  return (
    <section className="page" data-page="project" style={{ display: "block" }}>
      <div className="page_content project">
        <motion.div
          className="project_section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transform: {type: 'spring'}}}
          exit={{ opacity: 0 }}
        >
          <h2 className="project_heading">■ Projects (Design & Develop)</h2>
          <div 
          className="project_list">
            <ModalComponent />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
