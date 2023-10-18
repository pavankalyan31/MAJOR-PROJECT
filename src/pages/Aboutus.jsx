import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Enquiry from './Enquiry';
import Footer from '../components/Footer';
import Upbutton from '../components/Upbutton';
import log from '../images/About-Us.png';
import './Aboutus.css';

function Aboutus() {
  return (
    <div>
      <Navbar />
      
      <div className='log-container'>
        <img className='log' src={log} alt='log' />
      </div>

      <div className='why'>
        <h1>Why Us:</h1>
      </div>

      <div className='matterab' >
          <h1 className='udli'> Our Journey: </h1>
          <p>For more than 30 years, PK Chits Pvt Ltd has stood as a beacon of reliability and integrity in the financial landscape. Our journey is a testament to our commitment to financial inclusivity, customer satisfaction, and ethical business practices. We have successfully facilitated countless chit fund schemes, enabling people to achieve their financial goals, be it buying a home, funding education, or expanding their businesses.</p>
          <ul className='mat'>
            <li>Customer service and support through phone, email, and chat.</li>
            <li>Online access and payment options for hassle-free transactions.</li>
            <li>Security and reliability with proper documentation and legal compliance.</li>
            <li>Flexible and convenient chit schemes that suit different needs and budgets.</li>
            <li>Transparent and fair bidding process with live streaming and video recording.</li>
            <li>PK CHITS PVT LTD has a website where you can find more information about their services and contact details. You can also download their mobile app to manage your chits and payments.</li>
          </ul>
          <div className='protext'>
            <h2 className='udli'>Join Us in Your Financial Journey</h2>
            <p>Whether you are an individual planning for your future or a business aiming to expand, PK Chits Pvt Ltd invites you to join us in your financial journey. Let's create a success story together. Choose PK Chits Pvt Ltd for a future of financial prosperity.</p>
          </div>
        </div>

      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className='eqnabu'>
            <div className='eqnboxabu'>
              <Enquiry />
            </div>
          </div>
        </Col>
      </Row>

      <Upbutton />
      <div className='footus'>
        <Footer />
      </div>
    </div>
  );
}

export default Aboutus;
