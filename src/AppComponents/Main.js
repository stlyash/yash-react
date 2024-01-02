import React from 'react'
import {Certifications} from './MainComponents/Certifications.js'
import {ContactMe} from './MainComponents/ContactMe.js'
import {Education} from './MainComponents/Education.js'
import {Home} from './MainComponents/Home.js'
import {Internships} from './MainComponents/Internships.js'
import {Projects} from './MainComponents/Projects.js'
import {Resume} from './MainComponents/Resume.js'



export const Main = () => {
  return (
    <div>
      <Home />
      <Internships />
      <Certifications />
      <Education />
      <Projects />
      <Resume />
      <ContactMe />
    </div>
  )
}
