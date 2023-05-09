import '../css/pages.css';
import { motion } from 'framer-motion';

function Home() {
  return (
      <motion.div 
    initial={{opacity:0, }}
    animate={{opacity:1 }}
    exit={{opacity:0, }}
    >
    <section className="page" data-page="home" style={{display: 'block'}}>
      <div className='page_content home'>
    <p className='home_aboutme'>
      <span>Born in 1993,</span>
      <span>in Miami, Florida</span>
      <span>moved to Kansas</span>
      <span>early 2021.</span>
      <span>With a mission</span>
      <span>to learn and</span>
      <span>grow, the possibilities</span>
      <span>in Computer Science</span>
      <span>are endless. I am</span>
      <span>pursuing new</span>
      <span>expriences within</span>
      <span>this releam until</span>
      <span>I find the right fit.</span>
      </p>
      </div>
    </section>
      </motion.div>
  );
}

export default Home;
