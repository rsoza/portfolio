import ModalComponent from "../components/modal";
import "../css/pages.css";
import { motion } from "framer-motion";
import { getGifs } from "../utils/Firestore";
import React, {useState, useEffect} from "react";

function Projects() {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const fetchProjects = async () => {
      const projectsInfo = await getGifs();
      setProjects(projectsInfo);
    };
    fetchProjects();

    return () => {};
  }, []);

  console.log(projects)

  return (
    <section
        className="page"
        data-page="project"
        style={{ display: "block" }}
      >
        <div className="page_content project">
    <motion.div
      className="project_section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="project_heading">
      ■ Projects (Design & Develop)
      </h2>
      <div className="project_list">
      <ModalComponent 
      // projectName={'trackISS'}
      // projectYear={'2022'}
      // projectType={'Group'}
      // projectLanguages={'JavaScript'}
      // gif={"https://firebasestorage.googleapis.com/v0/b/portfolio-c42a2.appspot.com/o/trackiss-aboutme.gif?alt=media&token=8ebeada6-800c-45e1-8f6c-35598bfafb6b"}
       projects={projects}
       />
      </div>
      
    </motion.div>
        </div>
      </section>
  );
}

export default Projects;
