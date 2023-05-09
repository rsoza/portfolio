import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const location = useLocation();

  const linkVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };
  return (
    <header className="mainHeader" id="MainHeader">
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <h1 className="mainHeader_title">Rebecca Soza</h1>
        <p className="mainHeader_label">Computer Science Student</p>
      </motion.div>
      <nav className="mainHeader_nav">
        <ol>
          <motion.ul
            variants={linkVariants}
            animate="visible"
            exit="hidden"
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={
              location.pathname === "/"
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            <Link to="/">{location.pathname === "/" ? "●" : "Home"}</Link>
          </motion.ul>
          <motion.ul
          variants={linkVariants}
          animate="visible"
          exit="hidden"
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={
              location.pathname === "/projects"
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            <Link to="/projects">
              {location.pathname === "/projects" ? "●" : "Projects"}
            </Link>
          </motion.ul>
          <motion.ul
          variants={linkVariants}
          animate="visible"
          exit="hidden"
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={
              location.pathname === "/info"
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            <Link to="/info">
              {location.pathname === "/info" ? "●" : "Info"}
            </Link>
          </motion.ul>
          <motion.ul
          variants={linkVariants}
          animate="visible"
          exit="hidden"
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={
              location.pathname === "/contact"
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto"}
            }
          >
            <Link to="/contact">
              {location.pathname === "/contact" ? "●" : "Contact"}
            </Link>
          </motion.ul>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
