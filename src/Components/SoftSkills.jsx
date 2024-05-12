import React from 'react'
import '../CSS/SoftSkills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart, faCircle } from '@fortawesome/free-solid-svg-icons'

const SoftSkills = () => {
  return (
    <div className='soft-skills'>
        <div className="soft-skills-title">
            <FontAwesomeIcon icon={faPieChart}/>
            <h1>soft skills</h1>
        </div>
        <div className="soft-skills-list">
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Interpersonal skills</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Teamwork skills</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Adaptability</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Creativity</p>
            </div>
        </div>
    </div>
  )
}

export default SoftSkills
