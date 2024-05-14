import React from 'react'
import '../CSS/Image.css'
import img from '../Assets/anh1.jpg'

const Image = () => {
  return (
    <div className='image'>
      <div className="image-content">
      <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Image
