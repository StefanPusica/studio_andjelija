import './faq.css'
import { useState } from 'react'
import { GrClose, GrDown } from "react-icons/gr";

function Faq() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Pitanje 1?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            active: false
        },
        {
            id: 2,
            question: 'Pitanje 2?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            active: false
        },
        {
            id: 3,
            question: 'Pitanje 3?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            active: false
        },
        {
            id: 4,
            question: 'Pitanje 4?',
            answer: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            active: false
        }
    ])

    const [isFaqActive, setIsFaqActive] = useState(false);

  return (
    <div className="folder">
        {
            questions.map(question => (
                <div className="faq" key={question.id} question={question}> 
                    
                </div>
            ))
        }
    </div>
  )
}

export default Faq
