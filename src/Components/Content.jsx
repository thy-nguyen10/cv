import React from 'react'
import '../CSS/Content.css'
import Image from './Image'
import Profile from './Profile'
import Project from './Project'
import Activities from './Activities'
import Info from './Info'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'

const Content = () => {
  return (
    <div className='content-container'>
      <div className="content-content">
        <div className="left-content">
            <div className="top"></div>
            <Image/>
            <Info/>
            <Education/>
            <Skills/>
            <Certifications/>
            <div className="left-content-border">
            </div>
        </div>
        <div className="right-content">
            <div className="top">
                <h1>Nguyen thi tho thy</h1>
            </div>
            <Profile/>
            <Project/>
            <Activities/>
        </div>
      </div>
    </div>
  )
}

export default Content
