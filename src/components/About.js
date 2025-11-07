import { motion } from 'framer-motion'
import face from '../assets/face.png'

const About = () => (
  <motion.div id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <img src={face} className="face-img" alt="face" />

    <p>
      <strong>hello, i’m scott</strong>
    </p>

    <p>I am a software person currently living in phoenix, arizona</p>

    <p>
      <strong>my reasons for getting out of bed: </strong>
    </p>

    <p>
      coffee, music, skateboarding, photography, software design and
      development, food, art, movies, travel, and my two kids
    </p>
  </motion.div>
)

export default About
