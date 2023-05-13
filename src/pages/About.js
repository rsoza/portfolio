import { motion } from "framer-motion";
import pic from './pic.png';
import "../css/pages.css";

function About() {
  return (
    <>
 <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0, transition: { type: "spring", delay: 0.5, duration: 1 } }}
  exit={{ opacity: 0, y: 100 }}
  style={{
    position: "relative",
    height: "100vh",
  }}
>
  <img src={pic} alt="profile" className="profile" style={{ position: "absolute", bottom: 0, right: 0 }} />
</motion.div>
  <div className="home">
    <p>
      INFO WIP
      </p>
    </div>
    </>
  );
}

export default About;
