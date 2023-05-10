import "../css/pages.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="page" data-page="home" style={{ display: "block" }}>
      <div className="page_content home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="home_aboutme">
            <span>Originally from</span>
            <span>Miami, Florida,</span>
            <span>moved to Kansas</span>
            <span>in early 2021 to</span>
            <span>complete my degree</span>
            <span>at Wichita State</span>
            <span> University. Quickly</span>
            <span>learned that the</span>
            <span>possibilities in</span>
            <span>Computer Science</span>
            <span>are endless. I</span>
            <span>am pursuing new</span>
            <span>expriences until</span>
            <span>I find the right fit.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
