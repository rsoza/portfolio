import ModalComponent from "../components/modal";
import "../css/pages.css";
import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";
import { getGifs, getWork } from "../utils/Firestore";

function Experience() {
  const [projects, setProjects] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsInfo = await getGifs();
      setProjects(projectsInfo);
    };
    fetchProjects();

    const fetchWorkExperience = async () => {
      const workInfo = await getWork();
      setWorkExp(workInfo);
    };
    fetchWorkExperience();

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
          <h2 className="project_heading">■ Work (Background & Achievements)</h2>
          <div 
          className="project_list">
            <ModalComponent component={workExp} type={"work"} />
          </div>
        </motion.div>
        <motion.div
          className="project_section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transform: {type: 'spring'}}}
          exit={{ opacity: 0 }}
        >
          <h2 className="project_heading">■ School (Degree & Classes)</h2>
          <div 
          className="project_list">
            {/* <ModalComponent component={component} type={"projects"} /> */}
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
            <ModalComponent component={projects} type={"projects"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
