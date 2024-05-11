import React from 'react'
import '../CSS/Certifications.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Certifications = () => {
  return (
    <div className='certifications'>
        <div className="certifications-title">
            <h1>certifications</h1>
            <input type="text" />
        </div>
        <div className="certifications-text">
            <div className="cer-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Certificate of Participation in the workshop "Implementing Real-World Web Projects with Agile" with TMA Solution.</p>
            </div>
            <div className="cer-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Top 5 in the Class</p>
            </div>
            <div className="cer-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Duolingo (300 days)</p>
            </div>
        </div>
    </div>
  )
}

export default Certifications
