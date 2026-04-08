import { motion } from 'framer-motion'
import './App.css'
import heroImg from './assets/me.jpg'
import otterIcon from './assets/screenshototter.png'
import bitesizeIcon from './assets/bitesize-icon.png'
import { ReactComponent as BirdrIcon } from './assets/birdr.svg'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const section = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

function App() {
  return (
    <div className="site">
      {/* ── Hero ── */}
      <header className="hero">
        <motion.nav
          className="nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
        </motion.nav>

        <div className="hero-grid">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p className="hero-label" variants={fade}>
              Software Designer &amp; Developer
            </motion.p>
            <motion.h1 className="hero-name" variants={fade}>
              Scott<br />Stewart
            </motion.h1>
            <motion.p className="hero-sub" variants={fade}>
              I design and build software for a living, and sometimes
              for fun. Right now I'm at NearForm, working on modern web
              applications and helping teams ship quality software at scale.
              Away from the screen you'll find me fueled by coffee,
              skateboarding, taking photos, making food, watching movies,
              or traveling somewhere new with my two kids.
            </motion.p>
            <motion.div className="hero-cta" variants={fade}>
              <a href="#projects" className="btn-primary">See my work</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={heroImg} alt="Scott Stewart" />
          </motion.div>
        </div>
      </header>

      <main>
        {/* ── Projects ── */}
        <motion.section
          id="projects"
          className="sect projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={section}
        >
          <motion.h2 className="sect-title" variants={fade}>
            Work
          </motion.h2>

          <div className="project-list">
            <motion.div
              className="project-card"
              variants={fade}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-thumb project-thumb--svg">
                <BirdrIcon />
              </div>
              <div className="project-body">
                <h3>birdr</h3>
                <p>
                  A birding companion app for identifying and logging species
                  on the go. Built for nature lovers who want a simple,
                  beautiful field guide.
                </p>
                <span className="project-tags">Mobile App / Nature / Community</span>
              </div>
              <span className="project-arrow">&rarr;</span>
            </motion.div>

            <motion.a
              href="https://www.screenshototter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              variants={fade}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-thumb">
                <img src={otterIcon} alt="Screenshot Otter" />
              </div>
              <div className="project-body">
                <h3>Screenshot Otter</h3>
                <p>
                  Upload your app screenshots, pick a style, and export a
                  polished App Store gallery in minutes. No design skills needed.
                </p>
                <span className="project-tags">React / Design Tool / SaaS</span>
              </div>
              <span className="project-arrow">&rarr;</span>
            </motion.a>

            <motion.a
              href="https://www.bitesize.fit"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              variants={fade}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-thumb">
                <img src={bitesizeIcon} alt="bitesize" />
              </div>
              <div className="project-body">
                <h3>bitesize</h3>
                <p>
                  Fitness and nutrition tracking that helps people build
                  sustainable health habits. Track workouts, monitor meals,
                  stay on course.
                </p>
                <span className="project-tags">Mobile App / Health / Fitness</span>
              </div>
              <span className="project-arrow">&rarr;</span>
            </motion.a>
          </div>
        </motion.section>

        {/* ── Contact ── */}
        <motion.section
          id="contact"
          className="sect contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={section}
        >
          <motion.h2 className="sect-title" variants={fade}>
            Say Hello
          </motion.h2>

          <motion.div className="contact-body" variants={fade}>
            <p className="contact-lead">
              Have a project in mind, want to collaborate,
              or just want to chat?
            </p>
            <motion.a
              href="mailto:scott@scottstewart.co"
              className="contact-email"
              whileHover={{ letterSpacing: '0.04em' }}
              transition={{ duration: 0.3 }}
            >
              scott@scottstewart.co
            </motion.a>
          </motion.div>
        </motion.section>
      </main>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Scott Stewart</span>
        <span className="footer-sep">/</span>
        <span>Phoenix, AZ</span>
      </footer>
    </div>
  )
}

export default App
