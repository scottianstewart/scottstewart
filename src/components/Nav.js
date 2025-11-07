function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <a href="#about" className="nav-link active">
            <span className="nav-dot"></span>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li>
          <a href="#work" className="nav-link">Work</a>
        </li>
        <li>
          <a href="#photography" className="nav-link">Photography</a>
        </li>
        <li>
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
