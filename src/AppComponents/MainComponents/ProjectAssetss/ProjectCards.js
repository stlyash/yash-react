import React from 'react'

import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const ProjectCards = props => {

  return (
    <div className='col-lg-4 col-md-12' style={{borderRadius:"0.5cm"}}>
        <div className="card myposter" style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",margin:"0.5cm",backgroundColor:"rgb(63, 127, 231,0.1)",
        borderRadius:"0.5cm"}}>
        <img style={{borderRadius:"0.5cm 0.5cm 0.2cm 0.2cm"}} src={props.project.image} className="card-img-top" alt={props.project.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.project.title}</h5>
            <p className="card-text">{props.project.desc}</p>
            <Link style={{fontSize:"0.9em"}} to={props.project.link} 
            target='_blank' rel="noreferrer" className="btn  btn-outline-primary">
              Link 🔗
              </Link>
        </div>
        </div>
    </div>
  )
}

ProjectCards.propTypes = {
  myObjectProp: PropTypes.shape({
    key1: PropTypes.string,
    key2: PropTypes.string,
    key3: PropTypes.string,
    key4: PropTypes.string,
    key5: PropTypes.string
    // Add more PropTypes for the specific keys and their types
  })
};