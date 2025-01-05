import { Col, Container, Row } from 'react-bootstrap';
import { useLanguage } from '../../LanguageContext'
import ar from '../../locales/ar';
import en from '../../locales/en';
import './ServicesPage.css'
import service_one from '../../assets/laser-epilation-hair-removal-therapy.webp'
import service_two from '../../assets/mature-man-going-through-follicular-unit-extraction-process.webp'

const ServicesPage = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  
    return (
        <div className='ne-ServicesPage '>
            <h1 className='text-center mb-5'>{translations.Services}</h1>
            <Container>
                <Row className='justify-content-center m-auto'>
                    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center g-4">
                        <div className="service-card">
                            <img src={service_one} alt="laser-epilation-hair-removal-therapy " />
                            <h2 className='text-center card-service-title'>Laser</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center g-4">
                        <div className="service-card">
                            <img src={service_two} alt="mature-man-going-through-follicular-unit-extraction-process" />
                            <h2 className='text-center card-service-title'> Hair Transplant</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center g-4">
                        <div className="service-card">
                            <img src={service_one} alt="laser-epilation-hair-removal-therapy" />
                            <h2 className='text-center card-service-title'>Laser</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesPage;
