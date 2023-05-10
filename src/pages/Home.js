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
            <span>Miami, Florida, I</span>
            <span>moved to Kansas</span>
            <span>in early 2021 with</span>
            <span>a mission to learn</span>
            <span>and grow. The</span>
            <span>possibilities in</span>
            <span>Computer Science</span>
            <span>are endless, and am</span>
            <span>pursuing new</span>
            <span>expriences within</span>
            <span>this releam until</span>
            <span>I find the right fit.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
