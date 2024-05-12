import React from 'react'
import '../CSS/Activities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'

const Activities = () => {
  return (
    <div className='activities'>
        <div className="activities-main">
            <div className="activities-title">
                <FontAwesomeIcon icon={faServer}/>
                <h1>Activities</h1>
            </div>
            <div className="activite-times">
                <h1> Workshop with TMA Solution</h1>
                <h4>14/12/2023 - 21/12/2023</h4>
                <p>Workshop "Implementing Real-World Web Projects with Agile" with TMA Solution"</p>
            </div>
            <div className="activite-times">
                <h1> Member of Coder Club</h1>
                <h4>2023 - Present</h4>
                <p>Supporting the organization of meetings, searching for industry-related information from the internet, and sharing it with other members in the club.</p>
            </div>
            <div className="activite-times">
                <h1> Enterprise Internship - FPT Software </h1>
                <h4>7/2022</h4>
                <p>Visiting the company and being introduced to its scale, hearing about experiences and skills in the workplace, and finally participating in skill-based games.</p>
            </div>
            <div className="activite-times">
                <h1> Enterprise Internship - Quang Trung Software Park</h1>
                <h4>4/2022</h4>
                <p>Visiting buildings at QTSC, TMA, and Google office. Guided tours of the office spaces within the buildings, sharing skills and experiences in the field.</p>
            </div>
        </div>
    </div>
  )
}

export default Activities
