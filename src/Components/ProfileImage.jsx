import React from 'react'
import img  from '../Assets/anh1.jpg'
import '../CSS/ProfileImage.css'

const ProfileImage = () => {
  return (
    <div className='profile-image'>
        <div className="profile-image-img">
            <img src={img} alt="" />
        </div>
        <div className="profile-image-profile">
            <h1>nguyen thi tho thy</h1>
            <p>Hi! I am Nguyen Thi Tho Thy, a final-year student majoring in Software Engineering at Gia Dinh University. I have a passion for programming and web design, especially with ReactJS. With a solid foundation in HTML, CSS, and JavaScript, I aim to apply my knowledge and skills to contribute to web projects. I am seeking an internship opportunity to develop my skills while learning and challenging myself in a professional environment at a company. In the future, I aspire to become a front-end web developer capable of building complex web applications and delivering the best web experience for users.</p>
        </div>
    </div>
  )
}

export default ProfileImage
