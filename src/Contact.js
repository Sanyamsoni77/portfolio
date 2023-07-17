import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './LandingPage.css';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <Row className="header-section">
          <Col xs={6} className="text-left align-self-center">
            <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/sanyam.soni.14" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com/techsavvysanyam" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://instagram.com/techsavvy.sanyam?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://github.com/Sanyamsoni77" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sanyam-soni-405629241?fbclid=PAAaZEzAfGBldcPHb4d1RrQ41RL6atea562kjYrF66KhArucCnRDjCWDnuN88&original_referer=https%3A%2F%2Fl.instagram.com%2F" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </Col>
          <Col xs={6} className="text-right align-self-center">
            <nav className="navbar landing-page-navbar">
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
            <h1 className="header-title">CONTACT</h1>
            <Row className="contact-info-section">
              <Col>
                <h1 className="nameSS"> SANYAM SONI </h1>
                <h2> Email </h2>
                <p>techsavvysanyam@gmail.com</p>
                <h2> GET IN TOUCH ⬇️</h2>
                <div className="contact-form">
                  <form action="https://mail.google.com/?view=cm&to=techsavvysanyam@gmail.com&su=$" method="GET">
                    <input type="hidden" name="view" value="cm" />
                    <input type="text" name="name" placeholder="Name" />
                    <input type="hidden" name="to" value="techsavvysanyam@gmail.com" readOnly />
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea name="body" placeholder="Message"></textarea>
                    <button type="submit">Contact Me 📩</button>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
