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
          <span>My name is Rebecca and I am a</span>
          <span>Software Engineer! I originally</span>
          <span>started as a Computer Scientist in</span>
          <span>backend/frontend development in IT</span>
          <span>services. Currently, I am searching</span> 
          <span>for a job that fits my skill set. </span>
          <span>If you are looking for a developer with</span>
          <span>interests in exploring mathematical and </span>
          <span>networking problems, feel free to reach</span>
          <span>out!</span>
          <span>Please check out Projects or</span>
          <span>Current Activity tabs for my github!</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
