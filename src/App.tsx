import './App.css'
import Navbar from './Components/Navbar/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './LanguageContext';
import Hero from './Components/Hero/Hero';
import About from './Pages/About/About';
import BottomBanner from './Components/BottomBanner/BottomBanner';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='App'>
      <LanguageProvider>
      <Navbar/>
      <div id="Hero">
        <Hero/>
      </div>
      <div id="about">
        <About/>
      </div>
      <BottomBanner/>
      <Footer/>
      </LanguageProvider>
    </div>
  )
}

export default App