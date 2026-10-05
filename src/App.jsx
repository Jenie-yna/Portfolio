import "./App.css";

function App() {
  return (
  <>
  <div className="bg-stars">
  {[...Array(25)].map((_, i) => (
    <span key={i}></span>
  ))}
</div>
  <header className="navbar">
  <a href="#home" className="logo">Portfolio.</a>
  <nav>
  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    </header>

  <main>
  <section id="home" className="hero">
    <div className="hero-text fade-up">
    <p className="hero-greeting">Hi, there! I'm</p>
    <h1>Jeny An Telesforo</h1>
    <div className="role-group">
    <h2 className="typing-role">Frontend &amp; UI/UX Designer</h2>
    <p className="hero-tagline"> Still learning, still creating, still improving. </p>
  </div>

  <div className="hero-buttons">
    <a href="#projects" className="btn primary-btn">View Projects</a>
    <a href="#contact" className="btn secondary-btn">Contact Me</a></div>
  </div>
  
  <div className="hero-image fade-up">
    <div className="hero-image-glow"></div>
    <img src="/profile.jpg" alt="Jeny An Telesforo" />
  </div>
  </section>

  <section id="about" className="section about">
  <div className="section-heading">
    <h2>About Me</h2>
  </div>

  <div className="about-content">
    <div className="about-card">
    <img src="/profile.jpg" alt="About Jeny" />
  </div>

  <div className="about-text">
    <p>Hi! I'm Jeny, a passionate Front-end Developer who loves 
    crafting beautiful, user-friendly websites. I have a strong appreciation 
    for modern UI/UX design and enjoy creating visually engaging, interactive 
    experiences that make technology feel effortless.</p>

    <p>My journey began with HTML and CSS, and I’ve been expanding my skills to 
      React, CSS, and JavaScript. Beyond coding, I love exploring creative design 
      ideas, and discovering new tools that inspire innovation. I’m always eager
      to learn, grow, and collaborate on exciting projects that turn imagination 
      into reality!</p>

  <a href="#contact" className="btn primary-btn">Let&apos;s Talk</a>
  </div>
  </div>
  </section>

  <section id="skills" className="section skills">
    <div className="section-heading">
    <h2>Tools & Technologies</h2>
    </div>

  <div className="skills-grid">
  <div className="skills-box">
    <h3>Frontend</h3>
  <div className="skill-list">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Vite</span>
  </div>
  </div>
  <div className="skills-box">
    <h3>UI/UX Design</h3>
    <div className="skill-list">
    <span>Figma</span>
    <span>Canva</span>
  </div>
  </div>

  <div className="skills-box">
    <h3>Development Tools</h3>
    <div className="skill-list">
    <span>VS Code</span>
    <span>Git</span>
    <span>GitHub</span>
    <span>XAMPP</span>
  </div>
  </div>

  <div className="skills-box">
    <h3>Backend</h3>
    <div className="skill-list">
    <span>Php</span>
    <span>Node.js</span>
    <span>MySQL</span>
  </div>
  </div>
  
  </div>
  </section>

  <section id="projects" className="section projects">
  <div className="section-heading">
    <h2>Projects</h2>
  </div>

  <div className="projects-grid">

    <a
      href="https://www.figma.com/design/lRNr2ckS6YH5FiahvV7BZp/HCI?node-id=0-1&t=ki2e4ZCqaL2Jv2ne-1"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/product.png" alt="Product Landing Page" />
      <div className="project-overlay">
        <h3>Product Landing Page</h3>
      </div>
    </a>

    <a
      href="https://awesometodosapp-bb09.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/awesometodo.png" alt="Awesometodosapp" />
      <div className="project-overlay">
        <h3>Awesometodosapp</h3>
      </div>
    </a>

    <a
      href="https://www.figma.com/proto/WSL2c4wKWHOZznEZpfeWP6/Siklab?node-id=191-226&viewport=2580%2C-4%2C0.13&t=3mAQCEN3f9s9aft3-1&scaling=contain&content-scaling=fixed&starting-point-node-id=191%3A209&page-id=0%3A1"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/app.png" alt=" Web App" />
      <div className="project-overlay">
        <h3>Web App</h3>
      </div>
    </a>

    <a
      href="https://www.figma.com/proto/hMfDB1h6Ysy7SvKqtuIG9m/aktiv?page-id=9%3A2&node-id=457-543&viewport=-566%2C281%2C0.22&t=dg1DI7jzdjdRoJxQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=457%3A543"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/aktiv.png" alt=" Web App" />
      <div className="project-overlay">
        <h3>Web App 2</h3>
      </div>
    </a>

  </div>
  </section>

  <section id="contact" className="contact-section">
   <h2>Contact Me</h2>

  <div className="contact-content">
  <div className="contact-icons">

    <a href="tel:09093572016" className="contact-row">
    <i className="fas fa-phone"></i>
    <span>0909 357 2016</span></a>

    <a href="mailto:jenyanptelesforo@gmail.com" className="contact-row">
    <i className="fas fa-envelope"></i>
    <span>jenyanptelesforo@gmail.com</span>
    </a>

    <a href="https://www.linkedin.com/in/jeny-an-telesforo-b7025a370/" target="_blank" rel="noopener noreferrer" className="contact-row">
    <i className="fab fa-linkedin-in"></i>
    <span>Jeny An Telesforo</span>
    </a>

     <a href="https://github.com/Jenie-yna" target="_blank" rel="noopener noreferrer" className="contact-row">
    <i className="fab fa-github"></i>
    <span>Jeny An Telesforo</span>
    </a>

  </div>
  </div>
  </section>
  </main>

  <footer className="footer">
    <p>© 2026 Jeny An Telesforo. All rights reserved.</p>
  </footer>
    </>
  );
}

export default App;

