import ModalComponent from "../components/modal";
import "../css/pages.css";
import React, { useEffect, useState } from "react";
import { getGifs} from "../utils/Firestore";
import { motion } from "framer-motion";
function Experience() {
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
    <motion.div
    initial={{ opacity: 0,}}
    animate={{ opacity: 1, transition: {delay:0.5} }}
    exit={{ opacity: 0 }}>
        <div className="page_content project">
          <div className="project_section">
            <h2 className="project_heading">■ Projects (Design & Develop)</h2>
            <div className="project_list">
              <ModalComponent component={projects} type={"projects"} />
            </div>
          </div>
        </div>
    </motion.div>
  );
}

export default Experience;
