import ModalComponent from "../components/modal";
import "../css/pages.css";
import React, { useEffect, useState } from "react";
import { getGifs} from "../utils/Firestore";

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
        <div className="page_content project">
          <div className="project_section">
            <h2 className="project_heading">■ Projects (Design & Develop)</h2>
            <div className="project_list">
              <ModalComponent component={projects} type={"projects"} />
            </div>
          </div>
        </div>
  );
}

export default Experience;
