import React from 'react';
import './contactFormStyle.css';
import codeLogo from './main_assets/contactme_assets/codechef_logo.png'
import ghLogo from './main_assets/contactme_assets/github_logo.png'
//import greentick from './main_assets/contactme_assets/greentick.png'
//import hearthlogo from './main_assets/contactme_assets/hackerearth_logo.png'
import hranklogo from './main_assets/contactme_assets/hackerrank_logo.png'
import lcodeLogo from './main_assets/contactme_assets/leetcode_logo.png'
import linkedlogo from './main_assets/contactme_assets/linkedin_logo.png'
import pstoreLogo from './main_assets/contactme_assets/play_store_logo.png'
import {Link} from "react-router-dom";

export const ContactMe = () => {

  const ContactForm = (props) => {
    return (
      <div className='cbody col-sm-12 col-lg-6' style={{ display: props.isVisible }}>
        <iframe
          title="contact form"
          width="100%"
          style={{ height: "12cm" }}
          id="contform"
          src="https://stlyash.github.io/contact-me/"
        ></iframe>
      </div>
    );
  };


  return (
    <div id="connect">
      <div style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "6%", paddingBottom: "4%" }}>
        <h2 id="connect-section" className="text-primary" style={{ paddingBottom: "2%" }}>Contact Me</h2>

        <div className="row">
          <div className="col-sm-12 col-lg-6">
                   <Link to="https://play.google.com/store/apps/dev?id=6866879052780294015" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          <img id="logos" src={pstoreLogo} 
          alt="Google Play Store Logo"/>
          Google Play Store 🔗</span>
        </div></Link>


        <Link to="https://www.hackerrank.com/kumaryashasvi255" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables"> 
          <img id="logos" src={hranklogo} 
          alt="HackerRank Logo"/>
          HackerRank 🔗</span>
        </div></Link>   


        <Link to="https://www.codechef.com/users/kmryashasvi" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          <img id="logos" src={codeLogo}
          alt="Codechef Logo"/>
          CodeChef 🔗</span>
        </div></Link>


        <Link to="https://leetcode.com/kmryashasvi/" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          <img id="logos" src={lcodeLogo}
          alt="LeetCode Logo"/>
          LeetCode 🔗</span>
        </div></Link>


        <Link to="https://www.linkedin.com/in/kmryashasvi/" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">  
        <div className="contact-links">
          <span className="clickables">
          <img id="logos" src={linkedlogo}
          alt="LinkedIn Logo"/>
          LinkedIn 🔗</span>
        </div></Link>

        <Link to="https://github.com/stlyash" 
          className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          <img id="logos" src={ghLogo}
          alt="Github Logo"/>
          GitHub 🔗</span>
        </div></Link>
          </div>


          <ContactForm/>
        </div>
      </div>
    </div>
  );
};
