import "./Footer.css";
// import { useLanguage } from "../../LanguageContext";
// import ar from "../../locales/ar";
// import en from "../../locales/en";
import { Col, Container, Row } from "react-bootstrap";
import location from "../../assets/gps_10577652.svg";
import email from "../../assets/post-office_16969519.svg";
const Footer = () => {
//   const { language } = useLanguage();
//   const translations = language === "en" ? en : ar;
  return (
    <div className="ne-Footer mt-5">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-icon d-flex align-items-center justify-center g-3">
              <img src={location} alt="Location Icon" />
              <a
                href="https://maps.app.goo.gl/7uvn8FfSRFXBLuVZ7"
                className="ms-3"
              >
                Al Naboodah Garhoud Building,Dubai
              </a>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-icon d-flex align-items-center justify-items-center g-3">
              <img src={email} alt="Location Icon" />
              <a href="#" className="ms-3">
                test@test.com
              </a>
            </div>
          </Col>
          
        </Row>
        <p className="text-center text-white">
            all right revers to Glow Up medical Center @2025
        </p>
      </Container>
    </div>
  );
};

export default Footer;
