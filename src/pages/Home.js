import "../css/Style.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
    <div className="Heading">
    <motion.div 
    animate={{ rotate: -1 }}
    transition={{ 
        delay: 0.5,
        type: 'spring'
    }}>
        <h1 className="title">Rebecca Soza</h1>
    </motion.div>
      <h3 className="label">Computer Science Student</h3>
        </div>
    </>
  );
}

export default Home;
