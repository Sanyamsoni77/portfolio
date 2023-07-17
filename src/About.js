import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
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
            <h1 className="header-title">ABOUT</h1>
            <p className="cursive-text">I am a passionate Android app and web developer with a strong background in IT operations. I thrive on challenges and enjoy finding innovative solutions to complex problems. With a deep love for technology and a constant desire to learn and grow, I am always up-to-date with the latest industry trends and best practices.</p>
            <h2>ANDROID APP DEVELOPER:</h2>
            <p className="cursive-text">I have a wealth of experience in developing high-quality Android applications that deliver exceptional user experiences. From concept to deployment, I am skilled in the entire app development lifecycle, including designing intuitive user interfaces, implementing robust functionality, and ensuring smooth performance across various devices and screen sizes. My expertise also extends to integrating APIs, optimizing app performance, and incorporating cutting-edge technologies to create innovative mobile solutions.</p>
            <h2>WEB DEVELOPER:</h2>
            <p className="cursive-text">As a web developer, I specialize in creating responsive and dynamic websites that meet the unique needs of businesses and individuals. Using my knowledge of front-end and back-end technologies, I craft engaging user interfaces, implement powerful functionality, and ensure seamless navigation. I am proficient in HTML, CSS, JavaScript, and have experience working with popular frameworks and content management systems. Whether it's building a simple landing page or a complex web application, I am adept at delivering high-quality solutions.</p>
            <h2>IT OPERATIONS:</h2>
            <p className="cursive-text">My background in IT operations provides me with a comprehensive understanding of infrastructure management, network administration, and system troubleshooting. I am experienced in ensuring the smooth operation of critical IT systems, managing server environments, and implementing robust security measures. I am well-versed in various operating systems, virtualization technologies, and cloud platforms, enabling me to optimize IT infrastructure for maximum efficiency and reliability.</p>
            <h2>PASSION FOR TECHNOLOGY:</h2>
            <p className="cursive-text">Beyond my professional expertise, I am a true tech enthusiast at heart. I constantly explore emerging technologies, experiment with new tools and frameworks, and stay informed about industry trends. This passion drives me to continuously enhance my skills and deliver cutting-edge solutions that exceed client expectations.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
