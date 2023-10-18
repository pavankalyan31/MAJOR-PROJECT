import React from 'react';
import './Main.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mainlogo from '../images/main logo.png';
import Upbutton from '../components/Upbutton';
import ImageSlider from '../components/ImageSlider';
import { FaBuilding, FaUserCircle, FaUserFriends, FaUserTie } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const slides = [
  { url: "image-1.jpg" },
  { url: "image-2.jpg" },
  { url: "image-3.jpg" },
  { url: "image-4.jpg" },
  { url: "image-5.jpg" },
];

function Main() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className='m-logo'>
              <img className='logo-container' src={mainlogo} alt="" />
              <h1 className='pk-text'>PK CHITS PRIVATE LIMITED</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className='pknote'>
              <ul>
                <li>PK Chit Funds is a respected and renowned chit fund company committed to delivering robust financial solutions for both individuals and businesses.
                  Our unwavering dedication to financial inclusivity and client satisfaction has been steadfast since our establishment in 1990.</li>
                <br />
                <li>PK Chits values trust, customer focus, accessibility, and empowerment through innovative chit fund solutions. Join us for your financial prosperity.</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className='slider-container'>
            <ImageSlider slides={slides} />
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className='chits-period'>
            <h1 className='head' lg={3} md={3} sm={3} xs={3}>Chits Period</h1>
            <Row>
              <Col lg={3} md={3} sm={3} xs={3} className='text1'>
                <Link className='link-style' to='/Services'>
                  <div className='box1'>
                    <h2 className='short-term'>Short Term</h2>
                    <p>Range From <br /> Rs.5,00,000 - Rs.1,00,00,000.</p>
                  </div>
                </Link>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className='text2'>
                <Link className='link-style' to='/Services'>
                  <div className='box2'>
                    <h2 className='short-term'>Medium Term</h2>
                    <p>Range From <br /> Rs.3,00,000 - Rs.30,00,000.</p>
                  </div>
                </Link>
              </Col>
              <Col lg={3} md={3} sm={3} xs={3} className='text3'>
                <Link className='link-style' to='/Services'>
                  <div className='box3'>
                    <h2 className='short-term'>Long Term</h2>
                    <p>Range From <br /> Rs.5,00,000 - Rs.1,00,00,000.</p>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='icons'>
          <Col lg={5} md={5} sm={5} xs={5}>
            <p><FaBuilding />Hyderabad Branch</p>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <p><FaUserTie />100+ Employees</p>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <p><FaUserCircle />30+ Agents</p>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <p><FaUserFriends />50000+ Customer</p>
          </Col>
        </Row>
        </Container>
        <Upbutton />
        <div className='foothome'><Footer /></div>
      
    </div>
  );
}

export default Main;
