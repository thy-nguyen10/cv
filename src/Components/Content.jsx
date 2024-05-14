import React, { useEffect, useState } from 'react'
import '../CSS/Content.css'
import Image from './Image'
import Profile from './Profile'
import Project from './Project'
import Activities from './Activities'
import Info from './Info'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'
import ProfileImage from './ProfileImage'
import Mobile from './Mobile'
import SoftSkills from './SoftSkills'


const Content = () => {
  const [isIpad, setIsIpad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=700);
      setIsIpad(window.innerWidth >= 766 && window.innerWidth < 1024)
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? 'content-container-mobile' : isIpad ? 'content-container-ipad' : 'content-container'}>
      <div className="content-content">
        {isMobile ? (
          <>
          <div className="mobile-layout">
              <div className="mobile-content">
                <Mobile/>
                <Info/>
                <Skills/>
                <Education/>
                <Certifications/>
                <Project />
                <Activities />
              </div>
            </div>
          </>
        ) : isIpad ? (
          <div className="ipad-layout">
            <div className="left-content">
              {/* <div className="top"></div> */}
              <ProfileImage/>
              <Info />
              <Skills />
              <Education />
              <Certifications />
              <div className="left-content-border">
              </div>
            </div>
            <div className="right-content">
              {/* <div className="top">
                <h1>Nguyen thi tho thy</h1>
              </div>
              <Profile /> */}
              <Project />
              <Activities />
              {/* <ProfileImage /> */}
            </div>
          </div>
        ) : (
          <>
            <div className="top-content">
            <div className="top-top-content">
            <div className="left-content">
            <div className="top"></div>
              <Image />
              <Info />
              <Education />
              <Certifications />
              <div className="left-content-border"></div>
            </div>
            <div className="right-content">
              <div className="top">
                <h1>Nguyen thi tho thy</h1>
              </div>
              <Profile />
              <Skills/>
              <SoftSkills/>
            </div>
            </div>
            <div className="bottom-content">
              <Project />
              <Activities />
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Content
