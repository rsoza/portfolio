import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";
import { AnimatedTextBlock } from "../accessories/Animation";

function Navbar() {
  const location = useLocation();

  return (
    <header className="mainHeader">
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <h1 className="mainHeader_title">
          <AnimatedTextBlock text={"Rebecca Soza"} />
        </h1>
        <span className="mainHeader_label">Computer Scientist</span>
      </motion.div>
      <nav className="mainHeader_nav">
        <ol>
          <motion.ul
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={
              location.pathname === "/"
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            <Link to="/">{location.pathname === "/" ? "⚓︎" : "About"}</Link>
          </motion.ul>
          <motion.ul
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={{ pointerEvents: "auto" }}
          >
            <Link to="https://github.com/rsoza">
              Current Activity
            </Link>
          </motion.ul>
          <motion.ul
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
              {location.pathname === "/projects" ? "⚓︎" : "Projects"}
            </Link>
          </motion.ul>

          <motion.ul
            whileHover={{ x: 5 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            style={
              location.pathname === "/contact"
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            <Link to="/contact">
              {location.pathname === "/contact" ? "⚓︎" : "Contact"}
            </Link>
          </motion.ul>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
