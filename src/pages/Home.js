import "../css/Style.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Home() {
    const [rotate, setRotate] = useState(-10);
    const [delay, setDelay] = useState(0.5);

  return (
    <>
    <div className="Heading">
    <motion.div 
    animate={{ rotate }}
    transition={{ 
        delay,
        type: 'spring',
        bounce: 0.6,
        stiffness: 30,
        damping: 30
    }}
    onClick={() => {setRotate(0); setDelay(0);}}>
        <h1 className="title">Rebecca Soza</h1>
    </motion.div>
      <h3 className="label">Computer Science Student</h3>
        </div>
    </>
  );
}

export default Home;
