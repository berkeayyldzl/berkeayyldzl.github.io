import React, { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/background.png";
import logo from "./assets/logo.png";

// Import your flags:
import enFlag from "./assets/en_flag.png";
import trFlag from "./assets/tr_flag.png";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({
    code: "en",
    label: "EN",
    flag: enFlag,
  });

  // Only two languages: EN + TR
  const languages = [
    { code: "en", label: "EN", flag: enFlag },
    { code: "tr", label: "TR", flag: trFlag },
  ];

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setDropdownOpen(false);
    // Insert any actual language-switching logic here.
  };

  return (
    <div className="App">
      {/* Top Bar with Logo & Language Dropdown */}
      <div className="top-bar">
        <div className="top-bar-left">
          <img src={logo} alt="My Logo" className="site-logo" />
        </div>

        <div className="top-bar-right">
          {/* Custom Language Dropdown */}
          <div className="language-dropdown">
            <button
              className="dropdown-button"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="flag-icon"
              />
              {currentLang.label}
              <span className="caret">&#9662;</span>
            </button>

            {dropdownOpen && (
              <div className="dropdown-content">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <img src={lang.flag} alt={lang.label} className="flag-icon" />
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero / Intro Section */}
      <header
        className="hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="hero-content">
          <p className="hero-subtitle">HI THERE! I’M</p>
          <h1 className="hero-title">BERKE AYYILDIZLI</h1>
          <h2 className="hero-role">SOFTWARE ENGINEER</h2>

          <div className="social-icons">
            {/* GitHub */}
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                alt="LinkedIn"
              />
            </a>

            {/* Email */}
            <a href="mailto:youremail@example.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Main Content Sections */}
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Write a short bio here ...</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Showcase your projects ...</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Add your contact info here ...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
