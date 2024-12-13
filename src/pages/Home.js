import "../css/pages.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      <div className="home">
        <p className="home_aboutme">
          <span>Hello! My name is Rebecca, and I</span>
          <span>am a Software Engineer, originally</span>
          <span>started as a Computer Scientist in</span>
          <span>backend/frontend development in IT</span>
          <span> services. Currently, I am searching</span> 
          <span>for a job that fits my skill set. </span>
          <span>If you are looking for a developer with</span>
          <span>interests in exploring mathematical and </span>
          <span>networking problems, feel free to reach out!</span>
          <span>My latest project is exploring Kepler's Laws</span>
          <span>which uses geometry and physics in C++.</span>
          <span>Please check out my projects for the explanation</span>
          <span>of these software side projects or current</span>
          <span>activity for my github!</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
