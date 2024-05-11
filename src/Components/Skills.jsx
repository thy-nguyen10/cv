import React from 'react'
import '../CSS/Skills.css'

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills-title">
                <h1>Skills</h1>
                <input type="text" />
            </div>
            <div className="skills-main">
                <div className="skills-left">
                    <p>reacjs</p>
                    <p>html</p>
                    <p>css</p>
                    <p>javascript</p>
                </div>
                <div className="skills-right">
                    <p>python</p>
                    <p>svelte</p>
                    <p>bootstrap</p>
                    <p>sql server</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
