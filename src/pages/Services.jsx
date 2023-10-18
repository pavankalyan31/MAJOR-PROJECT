import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';
import Upbutton from '../components/Upbutton';
import { Container, Row, Col } from 'react-bootstrap';

function Services() {
    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h2 className='ct'>CHITS TERMS TYPES</h2>
                        <Col >
                        <table className='table'>
                            <thead >
                                <tr>
                                    <th>Chit Type</th>
                                    <th>Period</th>
                                    <th>Chit Value (Rs)</th>
                                    <th>Auction Ceiling (%)</th>
                                    <th>Max Bid (Rs)</th>
                                    <th>Bid Payable (Rs)</th>
                                    <th>Maximum Instalment (Rs)</th>
                                    <th>Dividend (Rs)</th>
                                    <th>Minimum Instalment (Rs)</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* Rows for Base Term Chits Period 25 Months */}
                                <tr>
                                    <td>Short Term</td>
                                    <td>25 Months</td>
                                    <td>5,00,000</td>
                                    <td>30%</td>
                                    <td>1,50,000</td>
                                    <td>3,50,000</td>
                                    <td>20,000</td>
                                    <td>5,000</td>
                                    <td>15,000</td>
                                </tr>
                                <tr>
                      <td>Short Term</td>
                      <td>25 Months</td>
                      <td>25,00,000</td>
                      <td>35%</td>
                      <td>8,75,000</td>
                      <td>16,25,000</td>
                      <td>1,00,000</td>
                      <td>30,000</td>
                      <td>70,000</td>
                    </tr>
                    <tr>
                      <td>Short Term</td>
                      <td>25 Months</td>
                      <td>1,00,00,000</td>
                      <td>30%</td>
                      <td>30,00,000</td>
                      <td>70,00,000</td>
                      <td>4,00,000</td>
                      <td>1,00,000</td>
                      <td>3,00,000</td>
                    </tr>

                    {/* Rows for Medium Term Chits Period 30 Months */}
                    <tr>
                      <td>Medium Term</td>
                      <td>30 Months</td>
                      <td>3,00,000</td>
                      <td>35%</td>
                      <td>1,50,000</td>
                      <td>1,95,000</td>
                      <td>10,000</td>
                      <td>3,000</td>
                      <td>7,000</td>
                    </tr>
                    <tr>
                      <td>Medium Term</td>
                      <td>30 Months</td>
                      <td>6,00,000</td>
                      <td>35%</td>
                      <td>2,10,000</td>
                      <td>3,90,000</td>
                      <td>20,000</td>
                      <td>6,000</td>
                      <td>14,000</td>
                    </tr>
                    <tr>
                      <td>Medium Term</td>
                      <td>30 Months</td>
                      <td>30,00,000</td>
                      <td>35%</td>
                      <td>10,50,000</td>
                      <td>19,50,000</td>
                      <td>1,00,000</td>
                      <td>10,000</td>
                      <td>70,000</td>
                    </tr>

                    {/* Rows for Long Term Chits Period 40 Months */}
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>5,00,000</td>
                      <td>35%</td>
                      <td>1,75,000</td>
                      <td>3,25,000</td>
                      <td>12,500</td>
                      <td>3,750</td>
                      <td>8,750</td>
                    </tr>
                    <tr>
                    <td>Large Term</td>
                    <td>40 Months</td>
                      <td>10,00,000</td>
                      <td>35%</td>
                      <td>3,50,000</td>
                      <td>6,50,000</td>
                      <td>25,000</td>
                      <td>7,500</td>
                      <td>17,500</td>
                    </tr>
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>15,00,000</td>
                      <td>35%</td>
                      <td>5,25,000</td>
                      <td>9,75,000</td>
                      <td>37,500</td>
                      <td>11,250</td>
                      <td>26,250</td>
                    </tr>
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>20,00,000</td>
                      <td>35%</td>
                      <td>7,00,000</td>
                      <td>13,00,000</td>
                      <td>50,000</td>
                      <td>15,000</td>
                      <td>35,000</td>
                    </tr>
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>25,00,000</td>
                      <td>35%</td>
                      <td>8,75,000</td>
                      <td>16,25,000</td>
                      <td>62,500</td>
                      <td>18,750</td>
                      <td>43,750</td>
                    </tr>
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>30,00,000</td>
                      <td>35%</td>
                      <td>10,50,000</td>
                      <td>19,50,000</td>
                      <td>75,000</td>
                      <td>22,500</td>
                      <td>52,500</td>
                    </tr>
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>50,00,000</td>
                      <td>30%</td>
                      <td>17,50,000</td>
                      <td>32,50,000</td>
                      <td>1,25,000</td>
                      <td>37,500</td>
                      <td>87,500</td>
                    </tr>
                    <tr>
                      <td>Large Term</td>
                      <td>40 Months</td>
                      <td>1,00,00,000</td>
                      <td>35%</td>
                      <td>35,00,000</td>
                      <td>65,00,000</td>
                      <td>2,50,000</td>
                      <td>75,000</td>
                      <td>1,75,000</td>
                    </tr>
                        </tbody>
                        </table>
                        </Col>
                    </Col>
                </Row>
                </Container>

                <Row>
                    <h1 className='h11' >CHITS TERMS</h1>
                    <div>
                        <Col className="textser1" lg={12} md={12} sm={12} x={12}>
                            <h2 className='h22'>Short Term</h2>
                            <p className='boxser1'>Range From <br/> Rs.5,00,000 - Rs.1,00,00,000.</p>
                        </Col>
                        <Col className='textser2'>
                            <h2 className='h22'>Medium Term</h2>
                            <p className='boxser2'>Range From <br/> Rs.3,00,000 - Rs.30,00,000.</p>
                        </Col>
                        <Col className='textser3'>
                            <h2 className='h22'>Long Term</h2>
                            <p className='boxser3'>Range From <br/> Rs.5,00,000 - Rs.1,00,00,000.</p>
                        </Col>
                    </div>
                </Row>
            
            <Upbutton />
            <div className="footser">
                <Footer />
            </div>
        </div>
    );
}

export default Services;
