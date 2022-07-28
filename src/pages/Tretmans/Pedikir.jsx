import  { Link } from 'react-router-dom'
import PageHeading from '../../components/Page-Heading/PageHeading'
import './tretman.css'
import { BsArrowLeft } from "react-icons/bs";


function Pedikir() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/tretmani'}>
            <BsArrowLeft className='back-icon' fill='var(--dark-purple)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Pedikir'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Budite ponosni na svoja stopala. Rešite se svih neprijatnosti, žuljeva, zadebljanja, tvrdih i
                ispucali peta uz medicinski pedikir.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pedikir
