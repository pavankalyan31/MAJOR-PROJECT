import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from '../images/main logo.png';

const Footer = () => {
  return (
    <div className="Wapper">
    <div className="footercontainer">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="footer-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="company-info">
            <h2 className="company-name">PK CHITS PVT LTD</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="stylefoot">
            <Link to="/Main" className="linkstyle" target="_blank">Home</Link>
            <Link to="/Portfolio" className="linkstyle" target="_blank">Portfolio</Link>
            <Link to="/Services" className="linkstyle" target="_blank" >Services</Link>
            <Link to="/Aboutus" className="linkstyle" target="_blank">About us</Link>
            <Link to="/Contact" className="linkstyle" target="_blank">Contact us</Link>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="footer-icons">
            <Link to="https://www.facebook.com" target="_blank" className="footer-icon"><FaFacebook /></Link>
            <Link to="https://www.instagram.com" target="_blank" className="footer-icon"><FaInstagram /></Link>
            <Link to="https://www.telegram.org" target="_blank" className="footer-icon"><FaTelegram /></Link>
            <Link to="https://www.whatsapp.com" target="_blank" className="footer-icon"><FaWhatsapp /></Link>
            <Link to="mailto:pkchitspvtltd@gmail.com" target="_blank" className="footer-icon"><FaEnvelope /></Link>
            <Link to="https://www.linkedin.com" target="_blank" className="footer-icon"><FaLinkedin /></Link>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="footer-text">
              &copy; {new Date().getFullYear()} PK CHITS PVT LTD. All Rights Reserved.
          </Col>  
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="footer-links">
            <h5>Privacy Policy.</h5>
            <h5>Terms & Conditions.</h5>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Footer;
