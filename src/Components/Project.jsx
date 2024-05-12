import React from 'react'
import '../CSS/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCircle } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  return (
    <div className='project'>
        <div className="project-main">
            <div className="project-title">
            <FontAwesomeIcon icon={faBriefcase} />
                <h1>Project In My School</h1>
            </div>
            <div className="project-two">
                <div className="project-time">
                    <p>3/2024</p>
                    <p>-</p>
                    <p>4/2024</p>
                </div>
                <hr />
                <div className="project-description">
                    <h1>web lumos-beauty</h1>
                    <p className='text'>Front-end Developer</p>
                    <div className="description">
                        <FontAwesomeIcon icon={faCircle} className='des-icon'/>
                        <p>Description: My website is designed to be simple yet effective, with the main purpose of displaying essential information about cosmetic products. You can easily add products to your cart, allowing for a seamless shopping experience.</p>
                    </div>
                    <div className="description">
                        <FontAwesomeIcon icon={faCircle} className='des-icon'/>
                        <p>Technology: HTML, CSS, JavaScript, ReactJs, Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className="project-one">
                <div className="project-time">
                    <p>5/2023</p>
                    <p>-</p>
                    <p>6/2023</p>
                </div>
                <hr />
                <div className="project-description">
                    <h1>website hasaki</h1>
                    <p className='text'>Front-end Developer</p>
                    <div className="description">
                        <FontAwesomeIcon icon={faCircle} className='des-icon'/>
                        <p>Description: My website is designed to be simple yet effective, with the main purpose of displaying essential information about cosmetic products. You will easily find information such as product images, product names, prices, and brief descriptions of the products.</p>
                    </div>
                    <div className="description">
                        <FontAwesomeIcon icon={faCircle} className='des-icon'/>
                        <p>Technology: HTML, CSS, JavaScript, Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
