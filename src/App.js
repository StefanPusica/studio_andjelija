import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp'
import { FaWhatsapp } from "react-icons/fa";
import { ContextProvider } from './context/Context';
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Home/Hero';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Tretmans from './pages/Tretmans/Treatments';
import Results from './pages/Results/Results';
import OurTeam from './pages/OutTeam/OurTeam';
import Appoitment from './pages/Appoitment/Appoitment';
import Faqs from './pages/Faq/Faqs';
import AntiCelulit from './pages/Tretmans/AntiCelulit';
import Mrsavljenje from './pages/Tretmans/Mrsavljenje';
import Masaze from './pages/Tretmans/Masaze';
import Pedikir from './pages/Tretmans/Pedikir';
import Lice from './pages/Tretmans/Lice';

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <TopBar />
          <Navbar />
          <Routes>
            <Route path='/' element={< Hero />} />
            <Route path='/onama' element={< About />} />
            <Route path='/tretmani' element={< Tretmans />} />
            <Route path='/rezultati' element={< Results />} />
            <Route path='/tim' element={< OurTeam />} />
            <Route path='/faq' element={< Faqs />} />
            <Route path='/zakazivanje' element={< Appoitment />} />
            <Route path='/anticelulit' element={<AntiCelulit />} />
            <Route path='/mrsavljenje' element={<Mrsavljenje />} />
            <Route path='/masaze' element={<Masaze />} />
            <Route path='/pedikir' element={<Pedikir />} />
            <Route path='/lice' element={<Lice />} />
          </Routes>
          <Footer />
          <ReactWhatsapp className="modal-whats-app" number="+381 62 388 562" message='' >
            <FaWhatsapp className='modal-whats-app-icons' />
          </ReactWhatsapp>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
