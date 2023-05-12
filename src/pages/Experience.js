import ModalComponent from "../components/modal";
import "../css/pages.css";
import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";
import { getGifs } from "../utils/Firestore";

function Experience() {
  const [component, setComponent] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsInfo = await getGifs();
      setComponent(projectsInfo);
    };
    fetchProjects();

    return () => {};
  }, []);

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
            <ModalComponent component={component} type={"projects"} />
          </div>
        </motion.div>
        <motion.div
          className="project_section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transform: {type: 'spring'}}}
          exit={{ opacity: 0 }}
        >
          <h2 className="project_heading">■ Projects (Design & Develop)</h2>
          <div 
          className="project_list">
            <ModalComponent component={component} type={"projects"} />
          </div>
        </motion.div>
        <motion.div
          className="project_section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transform: {type: 'spring'}}}
          exit={{ opacity: 0 }}
        >
          <h2 className="project_heading">■ Projects (Design & Develop)</h2>
          <div 
          className="project_list">
            <ModalComponent component={component} type={"projects"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
