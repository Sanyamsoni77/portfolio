import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <Container>
      <Col xs={6} className="text-right align-self-center">
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/About">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Projects">Projects</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Col>
        <Row className="header-section">
          <Col xs={6} className="text-left align-self-center">
            <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <h1 className="header-title">PROJECTS</h1>
            <Row className="projects-section">
          <Col xs={12}>
            <h2 className="projectSS">ANDROID PROJECTS</h2>
            <ul className="project-list">
              <li>
                <a href="https://github.com/Sanyamsoni77/Meme-Station" target="_blank" rel="noopener noreferrer">
                  - MEME STATION
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/MultiTableX" target="_blank" rel="noopener noreferrer">
                  - MultiTableX
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Greetify" target="_blank" rel="noopener noreferrer">
                  - GREETIFY
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Unit-Swap" target="_blank" rel="noopener noreferrer">
                  - UNIT SWAP
                </a>
              </li>
            </ul>
            <h2 className="projectSS">WEB PROJECTS</h2>
            <ul className="project-list">
              <li>
                <a href="https://github.com/Sanyamsoni77/Online-RTO-PROJECT" target="_blank" rel="noopener noreferrer">
                  - ONLINE RTO MANAGEMENT SYSTEM
                </a>
              </li>
              <li>
                <a href="https://sanyamsoni77.github.io/Online-RTO-PROJECT/" target="_blank" rel="noopener noreferrer">
                  VISIT THIS SITE
                </a>
              </li>
            </ul>
          </Col>
        </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
