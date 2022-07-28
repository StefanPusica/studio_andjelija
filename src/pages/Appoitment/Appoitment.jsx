import './appointment.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import ButtonMultyColor from '../../components/Button/ButtonMultiplyColor'
import { FaLocationArrow, FaClock, FaPhoneAlt } from "react-icons/fa";

function Appoitment() {
  return (
    <div className='Appointment'>
      <div className="appointemnt-holder">
        <PageHeading headingText={'Zakažite svoj termin'} />
        <div className="overlay"></div>
        <div className="appoitments-side">
            <form action="#" className='appoitment-form'>
                <input type="text" name='name' placeholder='Ime i prezime' />
                <input type="email" name='email' placeholder='Email' />
                <input type="text" name='name' placeholder='Željeni tretman' />
                <label htmlFor="meeting-time">Datum i vreme tretmana</label>
                <input 
                    type="datetime-local" 
                    // id="returnDateAdmin" 
                    name="meeting-time" 
                    // value={'nesto'} 
                    // onChange={onChange} 
                    // className='end-child-form' 
                />
                <ButtonMultyColor buttonType={'submit'} buttonText={'Zakaži termin'} />
            </form>
        </div>
        <div className="info-holder">
            <div className="info-location">
                <FaLocationArrow />
                <p>Safarikova 25, Novi sad</p>
            </div>
            <div className="info-time">
                <FaClock />
                <p>Radnim danima<br></br>08:00h - 20:00h</p>
            </div>
            <div className="info-phone">
                <FaPhoneAlt />
                <p>062388562</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Appoitment
