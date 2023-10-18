import React from 'react';
import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Enquiry from './Enquiry';
import Maps from '../components/Maps';
import Footer from '../components/Footer';
import Upbutton from '../components/Upbutton';
import { FaRegClock, FaEnvelope, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
        <Col lg={6} md={6} sm={6} xs={12}>
  <p className='con'>Contact us</p>
  <div className='conbox'>
              <div className='text'>
                <ul className='wh text-icons'>
                  <li><FaRegClock className='text-icon' /><span>Monday:</span> 10am - 6pm</li>
                  <li><FaRegClock className='text-icon' /><span>Tuesday:</span> 10am - 6pm</li>
                  <li><FaRegClock className='text-icon' /><span>Wednesday:</span> 10am - 6pm</li>
                  <li><FaRegClock className='text-icon' /><span>Thursday:</span> 10am - 6pm</li>
                  <li><FaRegClock className='text-icon' /><span>Friday:</span> 10am - 6pm</li>
                  <li><FaRegClock className='text-icon' /><span>Saturday:</span> 10am - 6pm</li>
                  <li><FaEnvelope className='text-icon' /><span>Email-</span>pkchitspvtltd@gmail.com</li>
                  <li><FaPhoneAlt className='text-icon' /><span>Phone no -</span>8309307344.</li>
                  <li><FaLocationArrow className='text-icon' /><span>Address-</span>Hyderbad, Telangana, India.</li>
                </ul>
              </div>
              </div>
</Col>
<Col lg={6} md={6} sm={6} xs={12}>
  <p className='you'>You can reach us at:</p>
  <div className='namebox'>
              <div className="pvt">
                <p>PK Chits PVT LTD</p>
                <p>Hyderabad, Telangana, India.</p>
              </div>
              </div>
</Col>
<Col lg={12} md={12} sm={12} xs={12}>
  <div className='loc'>
    <div className='map'><Maps /></div>
  </div>
</Col>
<Col lg={12} md={12} sm={12} xs={12}>
  <div className='eqn'>
    <div className='eqnbox'>
      <Enquiry />
    </div>
  </div>
</Col>
        </Row>
      </Container>
      <Upbutton />
      <div className='footer'><Footer /></div>
    </div>
  );
}

export default Contact;
