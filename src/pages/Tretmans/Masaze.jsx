import  { Link } from 'react-router-dom'
import PageHeading from '../../components/Page-Heading/PageHeading'
import './tretman.css'
import { BsArrowLeft } from "react-icons/bs";


function AntiCelulit() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/tretmani'}>
            <BsArrowLeft className='back-icon' fill='var(--dark-purple)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Masaže'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Nudimo Vam sve vrste masaža.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AntiCelulit
