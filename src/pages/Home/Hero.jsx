import { FaChevronRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './hero.css';

function Hero() {
  return (
    <div className="Hero">
        <div className="hero-holder">
          <div className="hero-holder-background">
            <h1 className="hero-heading">Studio Anđelija SG u službi vašeg zdravlja i lepote</h1>
              <ul className="tretmans-list">
                  <li className="tretmans-list-item">Sve vrste masaža <GiCheckMark className="check-icon" /> </li>
                  <li className="tretmans-list-item">Tretmani lica <GiCheckMark className="check-icon" /> </li>
                  <li className="tretmans-list-item">Anti celulit tretmani <GiCheckMark className="check-icon" /></li>
                  <li className="tretmans-list-item">Medicinski pedikir <GiCheckMark className="check-icon" /></li>
                  <li className="tretmans-list-item">Doalazak na adresu <GiCheckMark className="check-icon" /></li>
              </ul>
              <h1 className="hero-heading margin">Terapija za dušu i telo</h1>
              <Link to={'/zakazivanje'} className="hero-btn">
                  <p>Zakažite svoj termin</p>
                  <FaChevronRight />
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
