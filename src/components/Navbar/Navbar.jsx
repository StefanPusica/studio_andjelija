import './navbar.css'
// import {  } from "react-icons/fa";
import images from '../../constants/images'
import { useState } from 'react'
import { useNavigate, useLocation, Link} from 'react-router-dom'
import { IoHome, IoStatsChart } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { TbMassage } from "react-icons/tb";
import { GrScorecard } from "react-icons/gr";
import { FaLocationArrow, FaAddressBook, FaQuestion } from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  const [hamburger, setHamburger] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)

  const navigateToPage = (toPage) => {
    if (toPage === '/') {
        navigate('/')
        setHamburger(false)
    } else if (toPage === '/onama') {
        navigate('/onama')
        setHamburger(false)
    } else if (toPage === '/tretmani') {
      navigate('/tretmani')
      setHamburger(false)
    } else if (toPage === '/rezultati') {
      navigate('/rezultati')
      setHamburger(false)
    } else if (toPage === '/tim') {
      navigate('/tim')
      setHamburger(false)
    } else if (toPage === '/zakazivanje') {
      navigate('/zakazivanje')
      setHamburger(false)
    } else if (toPage === '/faq') {
      navigate('/faq')
      setHamburger(false)
    } else {
        navigate('/')
    }
}

  return (
    <div className='Navbar'>
      <div className="logo">
          <img src={images.logo} alt="logo" className='navbar-logo' />
      </div>
      <div className={hamburger ? 'hamburger active' : hamburger} onClick={() => setHamburger(!hamburger)}>
          <div className="hamburger-holder">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
          </div>
      </div>
      <div className={hamburger ? 'menu active' : 'menu'}>
          <ul className="menu-items">
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/')}
              >
                <IoHome fill={pathMatchRoute('/') ? '#fff' : 'var(--lightpurple)'} />
                <p className={pathMatchRoute('/') ? 'menu-item-text-active' : 'menu-item-text'}>Početna</p>
              </li>
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/onama')}
              >
                <FaAddressBook fill={pathMatchRoute('/onama') ? '#fff' : 'var(--lightpurple)'} />
                <p className={pathMatchRoute('/onama') ? 'menu-item-text-active' : 'menu-item-text'}>O nama</p>
              </li>
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/tim')}
              >
                <RiTeamFill fill={pathMatchRoute('/tim') ? '#fff' : 'var(--lightpurple)'}  />
                <p className={pathMatchRoute('/tim') ? 'menu-item-text-active' : 'menu-item-text'}>Naš tim</p>
              </li>
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/tretmani')}
              > 
                <TbMassage fill={pathMatchRoute('/tretmani') ? '#fff' : 'var(--lightpurple)'} />
                <p className={pathMatchRoute('/tretmani') ? 'menu-item-text-active' : 'menu-item-text'}>Tretmani</p>
              </li>
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/rezultati')}
              >
                <IoStatsChart fill={pathMatchRoute('/rezultati') ? '#fff' : 'var(--lightpurple)'} />
                <p className={pathMatchRoute('/rezultati') ? 'menu-item-text-active' : 'menu-item-text'}>Rezultati</p>
              </li>
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/faq')}
              >
                <FaQuestion fill={pathMatchRoute('/faq') ? '#fff' : 'var(--lightpurple)'} />
                <p className={pathMatchRoute('/faq') ? 'menu-item-text-active' : 'menu-item-text'}>FAQ</p>
              </li>
              <li 
                className='menu-item'
                onClick={() => navigateToPage('/zakazivanje')}
              >
                <FaLocationArrow fill={pathMatchRoute('/zakazivanje') ? '#fff' : 'var(--lightpurple)'} />
                <p className={pathMatchRoute('/zakazivanje') ? 'menu-item-text-active' : 'menu-item-text'}>Zakažite svoj termin</p>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
