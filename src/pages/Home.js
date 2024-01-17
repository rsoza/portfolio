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
          <span>Thank you for taking the time</span>
          <span>to get to know me. I am a self </span>
          <span>driven proactive individual who</span>
          <span>is looking for a job in a Defense </span>
          <span>Company. My career intrests are </span> 
          <span>software dev, machine learning,</span>
          <span>problem solving, algorithm design,</span>
          <span>and a bit of frontend dev. Feel </span>
          <span>free to check out my projects</span>
          <span>as they explain my passion. This</span>
          <span>portfolio was insprired with the </span>
          <span>idea of having a virtual business </span>
          <span>card made by me using Firebase </span>
          <span>and React JS. For a better user</span>
          <span>experience, please use a mobile</span>
          <span>device.</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
