import React from "react";
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My Personal Website</h1>
        <p>Hello! I'm excited to share my work and projects with you.</p>
        <a
          className="app-link"
          href="https://github.com/berkeayyldzl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
