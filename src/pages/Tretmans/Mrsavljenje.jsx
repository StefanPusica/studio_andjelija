import  { Link } from 'react-router-dom'
import PageHeading from '../../components/Page-Heading/PageHeading'
import './tretman.css'
import { BsArrowLeft } from "react-icons/bs";


function Mrsavljenje() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/tretmani'}>
            <BsArrowLeft className='back-icon' fill='var(--dark-purple)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Mršavljenje'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Navedeni tretmani namenjeni su klijentima koji imaju preko 100kg i žele efikasne rezultate.</p>
                <ul className='tretman-list marg-bot'>
                    <li>Lipo laser</li>
                    <li>Kavitacija + RF tretman</li>
                    <li>Kombinovani tretman 1</li>
                </ul>
                <span className='tretman-box-span-text'>(Lipo laser + kavitacija sa RF tretmanom)</span>
                <p className='tretman-box-text margin-t'>Invazivniji tretman za klijente koji žele brze i efikasne rezultate. Napravljeni za situacije koje
                podrazumevaju više regija istovremeno (radi se 2 regije u danu, lipo laser gornji deo,a
                kavitacija sa RF tretmanom donji deo tela i obrnuto)</p>
                <ul className='tretman-list'>
                    <li>Kombinovani tretman 2</li>
                </ul>
                <span className='tretman-box-span-text'>(Madero + lipo laser)</span>
                <p className='tretman-box-text'>Invazivniji tretman za klijente koji žele brze i efikasne rezultate. Napravljeni za situacije koje
                podrazumevaju više regija istovremeno (radi se 2 regije u danu, madero donji deo,a lipo
                laser donji deo tela i obrnuto)</p>
                <ul className='tretman-list'>
                    <li>Uklanjanje podrbatka</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mrsavljenje
