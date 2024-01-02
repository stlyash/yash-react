import React from 'react'
import PropTypes from 'prop-types'

export const Loading = props => {
  const displayStyle = props.isVisible ? {} : { display: 'none' };

  return (
    <div className='loading' style={{ ...displayStyle, zIndex: '101',
    width:"100%",height:"100%"}}>
      <span className="loader"></span>
    </div>
  );
}
Loading.defaultProps = {
  isVisible:false
}
Loading.propTypes = {
  isVisible:PropTypes.bool
  // We can also use: isVisible:PropTypes.bool.isRequired to make the prop mandatory
}
