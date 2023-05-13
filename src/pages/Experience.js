import ModalComponent from "../components/modal";
import "../css/pages.css";
import { motion } from "framer-motion";

function Experience() {


  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="project">
          <div className="project_section">
          <h2 className="project_heading">■ Projects (Design & Develop)</h2>
            <div className="project_list">
              <ModalComponent/>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experience;
