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
          <span>I'm Rebecca. Originally</span>
          <span>from Miami, Florida,</span>
          <span>moved to Kansas</span>
          <span>in early 2021 to</span>
          <span>complete my CS </span>
          <span>degree at Wichita </span>
          <span>State University. </span>
          <span> Knownfor being a</span>
          <span>student, problem solver,</span>
          <span>and self-taught </span>
          <span>developer. Currently,</span>
          <span>I am pursuing a</span>
          <span>position in Software </span>
          <span>Development or Cloud </span>
          <span>Engineering as soon </span>
          <span>as I graduate DEC-2023.</span>
        </p>

      </div>
    </motion.div>
  );
}

export default Home;
