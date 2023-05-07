import "../css/Style.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
    <motion.div 
     whileHover={{ scale: 1.03 }}
     onHoverStart={e => {}}
     onHoverEnd={e => {}}
    >
    <div className="Heading">
        <h1 className="title">Rebecca Soza</h1>
      <h3 className="subHeader">Computer Science Student</h3>
        </div>
    </motion.div>
    <div className="navbar">
        
    </div>
    </>
  );
}

export default Navbar;