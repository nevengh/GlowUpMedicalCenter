import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import About_img from '../../assets/Untitled.jpg'

const About = () => {
  return (
    <div className='ne-About'>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="about-images">
              <img src={About_img} alt="" />
              <h2>Glow Up Clinic</h2>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="about-content mt-5 text-center">
              <h1 className='about-Title'>Glow Up Medical Center</h1>
              <p className='about-text mt-5 '>
                Nestled in the heart of Dubai, Glow Up Clinic stands as Dubai’s premier medical and cosmetic dermatology practice. Our clinic, along with its subsidiaries—The Laser & Rejuvenation Center and Advanced Aesthetics Medical Spa—has been dedicated to serving UAE families for years. Our commitment is to offer the most advanced dermatology treatments available while ensuring the highest level of patient care in Dubai, UAE.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
