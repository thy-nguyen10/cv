import { faCalendar, faEnvelopeOpen, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../CSS/Info.css'

const Info = () => {
  return (
    <div className='info'>
        <div className="info-main">
            <div className="info-item">
                <div className="info-coloritem">
                    <FontAwesomeIcon icon={faCalendar}/>
                </div>
                <p>10/01/2003</p>
            </div>
            <div className="info-item">
            <div className="info-coloritem">
                    <FontAwesomeIcon icon={faPhone}/>
                </div>
                <p>0329 670 242</p>
            </div>
            <div className="info-item">
            <div className="info-coloritem">
                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                </div>
                <p>thyntt2003@gmail.com</p>
            </div>
            <div className="info-item">
            <div className="info-coloritem">
                    <FontAwesomeIcon icon={faCalendar}/>
                </div>
                <p>github.com/thy-nguyen10</p>
            </div>
            <div className="info-item">
            <div className="info-coloritem">
                    <FontAwesomeIcon icon={faMapLocation}/>
                </div>
                <p>Tan Binh, Ho Chi Minh</p>
            </div>
            <div className="info-item">
            <div className="info-coloritem">
                    <FontAwesomeIcon icon={faCalendar}/>
                </div>
                <p>linked</p>
            </div>
            <div className="info-item">
            <div className="info-coloritem">
                    <FontAwesomeIcon icon={faCalendar}/>
                </div>
                <p>linkwebcv</p>
            </div>
        </div>
    </div>
  )
}

export default Info
