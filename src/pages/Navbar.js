/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import "../css/navbar.css";

function Navbar(props) {
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
            <ul>
              <a className="_text _active" href="#" onClick={() => props.handleNavItemClick('home')}>
                {props.selectedNavItem === 'home' ? '●' : 'Home'}
              </a>
            </ul>
            <ul>
              <a className="_text" href='#projects' onClick={() => props.handleNavItemClick('projects')}>
              {props.selectedNavItem === 'projects' ? '●' : 'Projects'}

              </a>
            </ul>
            <ul>
              <a className="_text" href="#info" onClick={() => props.handleNavItemClick('info')}>
              {props.selectedNavItem === 'info' ? '●' : 'Info'}
              </a>
            </ul>
            <ul>
              <a className="_text" href="#contact" onClick={() => props.handleNavItemClick('contact')}>
              {props.selectedNavItem === 'contact' ? '●' : 'Contact'}
              </a>
            </ul>
          </ol>
        </nav>
      </header>
  );
}

export default Navbar;
