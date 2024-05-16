import React from 'react';
import './contactFormStyle.css';

export const ContactMe = () => {

  const ContactForm = (props) => {
    return (
      <div className='cbody' style={{ display: props.isVisible }}>
        <iframe
          title="contact form"
          width="100%"
          style={{ height: "12cm" }}
          id="contform"
          src="https://yashlikescode.github.io/contact-me/"
        ></iframe>
      </div>
    );
  };


  return (
    <div id="connect">
      <div style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "6%", paddingBottom: "4%" }}>
        <h2 id="connect-section" className="text-primary" style={{ paddingBottom: "2%" }}>Contact Me</h2>

        <div>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};
