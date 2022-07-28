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
        <PageHeading headingText={'Anti Celulit'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Ako pitate grupu žena šta bi promenile kada bi mogle da promene jednu stvar na sebi,
                možete biti sigurni da bi većina od njih rekle: “Celulit”!
                Iako možda verujete da ćete zauvek ostati sa celulitom,
                ili ste možda isprobali tremane kod kuće koji ranije nisu funkcionisali,
                postoji rešenje za celulit a mi Vam nudimo sledeće tretmane:</p>
                <span className='tretman-box-span-text'>Ovi tretmani su prventstveno namenjeni i namenjeni ženama koje imaju 5-10kg viška ili žele da uklone
                celulit na određenoj regiji.</span>
                <ul className='tretman-list'>
                    <li>Ručna anticelulit masaža</li>
                    <li>Madero terapija</li>
                    <li>Ultra zvučna masaža</li>
                    <li>Kavitacija sa RF tretmanom</li>
                    <li>Vakum sa RF tretmanom</li>
                    <li>Uklanjanje strija</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AntiCelulit
