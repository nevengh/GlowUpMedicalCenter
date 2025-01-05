import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/IMG_7483_PNG.png';
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const translations = language === "en" ? en : ar;

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className='glow-up-logo' src={logo} alt="Glow Up Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#about">{translations.About}</Nav.Link>
              <Nav.Link href="#link">{translations.Services}</Nav.Link>
              <Nav.Link href="#link">{translations.ContactUs}</Nav.Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="#CCC964" id="dropdown-basic">
                {language === "en" ? translations.English : translations.Arabic}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange("en")}>
                  {translations.English}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("ar")}>
                  {translations.Arabic}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
