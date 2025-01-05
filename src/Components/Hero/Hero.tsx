import { useEffect, useState } from 'react';
import './Hero.css'
import { useLanguage } from '../../LanguageContext';
import en from '../../locales/en';
import ar from '../../locales/ar';
import { Button } from 'react-bootstrap';

const Hero = () => {
    const {language}=useLanguage();
    const translations = language === "en" ? en : ar;
    const [textIndex, setTextIndex] = useState(0);
    // const services = ["Dental", "Skin Care", "Laser Hair Removal"];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % translations.HeroServices.length);
      }, 2000); // تغيير النص كل 2 ثانية
  
      return () => clearInterval(interval); // تنظيف التايمر عند إلغاء التركيب
    }, []);
  return (
    <div className='ne-Hero'>
        <div className="hero-caption">
            <h1>{translations.HeroTitle} <span>"{translations.HeroServices[textIndex]}"</span> </h1>
            <p>"{translations.HeroParagraph} "</p>
            <div className="Contact-hero-btn">
            <Button href='#contact' variant="dark">{translations.appointment}</Button>
            </div>
        </div>

    </div>
  )
}

export default Hero