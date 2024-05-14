import React from 'react'
import '../CSS/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCog } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-title">
            <FontAwesomeIcon icon={faCog}/>
            <h1>technical skills</h1>
        </div>
        <div className="skills-technical">
        <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Front-end: HTML, CSS, JavaScript, React.js, Bootstrap.</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Back-end: Java, C#, Node.js, Python.</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Database: SQL Server, MongoDB.</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Design: Figma.</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>DevOps:  Cloudflare, GitHub Pages.</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Tools: Visual Code, Visual Studio Code.</p>
            </div>
            <div className="skills-list">
                <FontAwesomeIcon icon={faCircle} className='cer-list-icon'/>
                <p>Other tools: ChatGPT, Gemini, Telegram, Skype, LinkedIn.</p>
            </div>
        </div>
    </div>
  )
}

export default Skills
