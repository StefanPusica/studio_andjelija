import { useContext } from 'react';
import Context from '../../context/Context';
import  { Link } from 'react-router-dom'
import './treatments.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import images from '../../constants/images';
import { HiX } from "react-icons/hi";

function Tretmans() {

  // const { serviceItems1, serviceItems2, FlagItem, showDetalis, closeDetalis } = useContext(Context);

  return (
    <div className='Treatments'>
      <PageHeading headingText={'Tretmani'} />
      <div className="Treatments-holder">
        <Link to={'/anticelulit'} className="service-card card1"></Link>
        <Link to={'/mrsavljenje'} className="service-card card2"></Link>
        <Link to={'/masaze'} className="service-card card3"></Link>
        <Link to={'/pedikir'} className="service-card card4"></Link>
        <Link to={'/lice'} className="service-card card5"></Link>
      </div>

      

    </div>
  )
}

export default Tretmans
