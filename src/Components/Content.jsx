import React from 'react'
import '../CSS/Content.css'
import Image from './Image'
import Profile from './Profile'
import Project from './Project'

const Content = () => {
  return (
    <div className='content-container'>
      <div className="content-content">
        <div className="left-content">
            <div className="top"></div>
            <Image/>
        </div>
        <div className="right-content">
            <div className="top">
                <h1>Nguyen thi tho thy</h1>
            </div>
            <Profile/>
            <Project/>
        </div>
      </div>
    </div>
  )
}

export default Content
