import './App.css'
import faceImg from './assets/me.jpeg'

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <header className="header">
          <h1 className="header-title">Hello, I'm Scott</h1>
          <div className="header-image-wrapper">
            <img src={faceImg} alt="me" className="face-img" />
          </div>
        </header>

        <main className="main-content">
          <section id="about" className="about">
            <p>I'm a software person currently living in Phoenix, Arizona.</p>
          </section>

          <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project">
              <h3>
                <a
                  href="https://www.bitesize.fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bitesize
                </a>
              </h3>
              <p>
                A fitness tracking and nutrition app I created to help people
                achieve their health goals. Track workouts, monitor nutrition,
                and build sustainable habits.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
