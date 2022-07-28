import './about.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import Slider from './Slider'
import images from '../../constants/images'

function About() {
  return (
    <div className="About">
      <PageHeading headingText='Naša priča' />
      <div className="about-holder">
          <div className="about-row 1">
              <div className="about-row-left">
                <p className='about-row-left-text'>
                Jelena Šipka dip. Ekonomista, fiziotarapeut i kozmetičar, trenutno
                student strukovnih studija za fizikalnu terapiju. Poseduje brojne
                sertifikovane edukacije na polju nege lica i tela.
                </p>
              </div>
              <div className="about-row-right">
                <img src={images.about1} alt="#" />
              </div>
          </div>
          <div className="about-row 2">
            <div className="about-row-right">
                <img src={images.about2} alt="#" />
            </div>
            <div className="about-row-right">
                <p className='about-row-left-text'>
                Jelena ima dugogodišnje iskustvo u radu na polju kozmetičkih usluga.
                Od 2006. godine u Novom Sadu na Detelinari, otvorila je svoj prvi salon
                u Donna stil, u partnerskom odnosu, bavila se pretežno negom i
                zdravljem tela i lepote. Pored preduzetničih projekata, radila je u domu
                zdravlja na fizikalnoj medicini i terapiji, 3 godine rada u Nemačkoj na
                području zdravstvene nege.
                </p>
            </div>
          </div>
          <div className="about-row 3">
            <div className="about-row-left">
                    <p className='about-row-left-text'>
                    Pre dve godine 13.08.2020 nastaje studio Andjelija SG u službi vašeg
                    zdravlja i lepote kao spoj znanja i iskustva u želji da budemo svi lepi i
                    zdravi.
                    </p>
                </div>
                <div className="about-row-right">
                    <img src={images.about3} alt="#" />
                </div>
            </div>
      </div>
      <PageHeading headingText='Šta naši polaznici kažu o nama?' />
      <Slider />
    </div>
  )
}

export default About
