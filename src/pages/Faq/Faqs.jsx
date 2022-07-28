import './faqs.css'
import Faq from './Faq'
import PageHeading from '../../components/Page-Heading/PageHeading'

function Faqs() {
  return (
    <div className='FAQS'>
        <PageHeading>Često Postavljana pitanja</PageHeading>
        <div className="faqs-holder">
            <Faq />
        </div>
    </div>
  )
}

export default Faqs
