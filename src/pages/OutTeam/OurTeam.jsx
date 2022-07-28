import './ourTeam.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import images from '../../constants/images'

function OurTeam() {
  return (
    <div className="OutTeam">
      <PageHeading headingText={'Naš tim'} />
      <div className="our-team-cards-holder">
        <div className="our-team-card card-1">
            <div className="our-team-card-left">
                <img src={images.numb1} alt="#" />
            </div>
            <div className="our-team-card-right">
                <h1 className='our-team-heading'>Šipka Jelena</h1>
                <h2 className='our-team-heading r2'>Fizioterapeut i kozmetičar</h2>
                <div className="our-team-line"></div>
                <p className='our-team-text'>Rad u oblasti zdravstva u nemačkoj dve ipo godine. Rad u domu zdravlja Novi sad na fizikalnoj terapiji
                Od 2006. godine imam svoj salon i bavim se kozmetikom. Sertifikovani kursevi za kozmetičara, manikir, pedikir, nemački kurs za renomirani brend trosani, purity akademija kurs za higijenski tretman lica.</p>
            </div>
        </div>
        <div className="our-team-card card-2">
            <div className="our-team-card-left">
                <img src={images.numb2} alt="#" />
            </div>
            <div className="our-team-card-right">
                <h1 className='our-team-heading'>Slađana Čučilović</h1>
                <h2 className='our-team-heading r2'>Apsolvent zdravstvenih nega</h2>
                <div className="our-team-line"></div>
                <p className='our-team-text'>Medicinska sestra i apsolvent na fakultetu zdravstvena nega</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
