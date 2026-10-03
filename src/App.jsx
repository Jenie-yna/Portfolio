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
    <h2>My Skills</h2>
    </div>

  <div className="skills-grid">
  <div className="skills-box">
    <h3>Frontend</h3>
  <div className="skill-list">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
  </div>
  </div>

  <div className="skills-box">
    <h3>Design</h3>
    <div className="skill-list">
    <span>Figma</span>
    <span>Wireframing</span>
    <span>Prototyping</span>
    <span>UI/UX</span>
  </div>
  </div>
  </div>
  </section>

  <section id="projects" className="section projects">
  <div className="section-heading">
    <h2>Projects</h2>
  </div>

 <div className="projects-grid">

  <div className="project-card">
    <img src="/product.png" alt="Project 1" />
    <div className="project-overlay">
      <h3>Product Landing Page</h3>
    </div>
  </div>

  <div className="project-card">
    <img src="/awesometodo.png" alt="Project 2" />
    <div className="project-overlay">
      <h3>Awesometodosapp</h3>
    </div>
  </div>

  <div className="project-card">
    <img src="/app.png" alt="Project 3" />
    <div className="project-overlay">
      <h3>Web App</h3>
    </div>
  </div>

  <div className="project-card">
    <img src="/aktiv.png" alt="Project 4" />
    <div className="project-overlay">
      <h3>Web App 2</h3>
    </div>
  </div>

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