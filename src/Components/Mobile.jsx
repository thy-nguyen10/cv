import React from 'react'
import '../CSS/Mobile.css'
import img from '../Assets/anh1.jpg'
import Profile from './Profile'

const Mobile = () => {
  return (
    <div className='mobile'>
      <div className="mobile-title">
        <div className="mobile-img">
        <img src={img} alt="" />
        <h1>nguyen thi tho thy</h1>
        </div>
        <Profile/>
      </div>
    </div>
  )
}

export default Mobile
