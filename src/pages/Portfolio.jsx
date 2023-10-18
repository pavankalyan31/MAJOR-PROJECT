import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Upbutton from '../components/Upbutton';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/Portfolio.css';

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className='portfoliocontainer'>
            <div className='portfolio-content'>
                <h1 className='our'>Our Portfolio: Empowering Financial Dreams Since 1990</h1>
                <p className='portfolio-text'>At PK Chits Pvt Ltd, we take immense pride in our legacy of over three decades, providing trusted and innovative financial solutions to individuals and businesses. Since our establishment in 1990, we have been dedicated to empowering dreams and aspirations, one chit at a time. Our portfolio showcases not just our success stories, but the lives we've touched and the dreams we've helped materialize.</p>

                <h1 className='our'> Our Journey: </h1>
                <p className='portfolio-text'>For more than 30 years, PK Chits Pvt Ltd has stood as a beacon of reliability and integrity in the financial landscape. Our journey is a testament to our commitment to financial inclusivity, customer satisfaction, and ethical business practices. We have successfully facilitated countless chit fund schemes, enabling people to achieve their financial goals, be it buying a home, funding education, or expanding their businesses.</p>

                <h1 className='our'>Why Choose PK Chits Pvt Ltd?</h1>
                <ul>
                  <li className='portfolio-text1'><p>Trusted Expertise: With decades of experience, we have a deep understanding of the financial landscape and a proven track record of successful chit fund schemes.</p></li>
                  <li className='portfolio-text1'><p>Customer-Centric Approach: Our customers are at the heart of everything we do. We listen, understand, and tailor our services to meet their unique financial needs.</p></li>
                  <li className='portfolio-text1'><p>Innovation in Finance: We embrace innovation, offering cutting-edge chit fund solutions that adapt to the changing needs of our clients.</p></li> 
                  <li className='portfolio-text1'><p>Community Impact: Beyond business, we are committed to making a positive impact on the communities we serve. We believe in giving back and supporting local initiatives.</p></li>
                </ul>

                <h1 className='our'>Our Success Stories: Realizing Dreams, One Chit at a Time</h1>
                <p className='portfolio-text'>Our portfolio is not just a collection of numbers; it's a compilation of dreams fulfilled and lives transformed. Through testimonials, case studies, and real-time analytics, we demonstrate the effectiveness of our chit fund schemes. We take pride in being a part of our clients' success stories, helping them achieve financial stability and security.</p>

                <h1 className='our'>Join Us in Your Financial Journey</h1>
                <p className='portfolio-text'>Whether you are an individual planning for your future or a business aiming to expand, PK Chits Pvt Ltd invites you to join us in your financial journey. Let's create a success story together. Choose PK Chits Pvt Ltd for a future of financial prosperity.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Upbutton />
      <div className='foot'><Footer /></div>
    </div>
  );
}

export default Portfolio;
