import './results.css';
import PageHeading from '../../components/Page-Heading/PageHeading'
import images from '../../constants/images';

function Results() {
  return (
    <div className='Results'>
      <PageHeading headingText={'Rezultati'} />
      <div className="Results-holder">
          <div className="results-left-side">
            <h1 className='results-heading'>PRE</h1>
            <div className="results-card res1"></div>
            <div className="results-card res3"></div>
            <div className="results-card res5"></div>
            <div className="results-card res7"></div>
          </div>
          <div className="results-middle-side">
              <div className="results-line"></div>
          </div>
          <div className="results-right-side">
            <h1 className='results-heading'>POSLE</h1>
            <div className="results-card res2"></div>
            <div className="results-card res4"></div>
            <div className="results-card res6"></div>
            <div className="results-card res8"></div>
          </div>
      </div>
      <div className="Results-holder-part2">
        <div className="results-card res9"></div>
        <div className="results-card res10"></div>
        <div className="results-card res11"></div>
        <div className="results-card res12"></div>
        <div className="results-card res13"></div>
        </div>
    </div>
  )
}

export default Results
