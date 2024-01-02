import React from 'react';
import {Link} from "react-router-dom";
// Making the nav bar names bold on scroll
var collapsed = 0;
// Script for bolding the navbar text when corresponding part is scrolled on
window.addEventListener('scroll', function() {

  const master = document.querySelector(".fronttopb");
  const firstel = document.querySelector(".shadowtopb");
  const secondel = document.querySelector(".edgetopb");
  const thirdel = document.querySelector(".buttontopb");
  
  firstel.style.width = master.offsetWidth + "px";
  secondel.style.width = master.offsetWidth + "px";
  thirdel.style.width = master.offsetWidth + "px";
  
    var textElement1 = document.querySelector('#whole-experience');
    var rect1 = textElement1.getBoundingClientRect();
    var navInd1 = document.getElementById("nav-exp");
    
    if (rect1.top <= window.innerHeight-40 && rect1.bottom >= window.innerHeight) {
      navInd1.style.fontWeight = "bold";
    } else {
      navInd1.style.fontWeight = "normal";
    }
  });
  
  window.addEventListener('scroll', function() {
    var textElement2 = document.querySelector('#all-educations');
    var rect2 = textElement2.getBoundingClientRect();
    var navInd2 = document.getElementById("nav-edu");
    if (rect2.top <= window.innerHeight-40 && rect2.bottom >= window.innerHeight-120) {
      navInd2.style.fontWeight = "bold";
    } else {
      navInd2.style.fontWeight = "normal";
    }
  });
  
  window.addEventListener('scroll', function() {
    var navInd3 = document.getElementById("nav-home");
    if (window.scrollY === 0) {
      navInd3.style.fontWeight = "bold";
    } else {
      navInd3.style.fontWeight = "normal";
    }
  });
  
  window.addEventListener('scroll', function() {
    var textElement5 = document.querySelector('#all-projects');
    var rect5 = textElement5.getBoundingClientRect();
    var navInd5 = document.getElementById("nav-project");
    if (rect5.top <= window.innerHeight && rect5.bottom >= window.innerHeight) {
      navInd5.style.fontWeight = "bold";
    } else {
      navInd5.style.fontWeight = "normal";
    }
  });
  
  window.addEventListener('scroll', function() {
    var textElement6 = document.querySelector('#a-resume');
    var rect6 = textElement6.getBoundingClientRect();
    var navInd6 = document.getElementById("nav-resume");
    if (rect6.top <= window.innerHeight-400 && rect6.bottom >= window.innerHeight-100) {
      navInd6.style.fontWeight = "bold";
    } else {
      navInd6.style.fontWeight = "normal";
    }
  });
  window.addEventListener('scroll', function() {
    var textElement7 = document.querySelector('#connect');
    var rect7 = textElement7.getBoundingClientRect();
    var navInd7 = document.getElementById("nav-contact");
    if (rect7.top <= window.innerHeight-200 && rect7.bottom >= 0) {
      navInd7.style.fontWeight = "bold";
    } else {
      navInd7.style.fontWeight = "normal";
    }
  });
  window.addEventListener('scroll', function() {
    var textElement = document.querySelector('#whole-certifications');
    var rect = textElement.getBoundingClientRect();
    var navInd = document.getElementById("nav-cert");
    
    if (rect.top <= window.innerHeight && rect.bottom >= window.innerHeight-60) {
      navInd.style.fontWeight = "bold";
  
      
      if(collapsed===0)
      {
      // Code to expand the first collapsible automatically
      // Function to expand the collapsible element
      function expandCollapsible() {
    // Find the button element by its ID
    var button = document.getElementById('collapseOneButton');
  
    // Programmatically press the button
    button.click();
      }
      // Delay the expansion after 2 seconds
      setTimeout(expandCollapsible, 1000);
      collapsed=1;
      }
  
    } else {
      navInd.style.fontWeight = "normal";
    }
  });

export const Header = () => {
  const scrollToTarget = (elementId) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: elementPosition.top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <nav id="nav-bar" style={{zIndex: '100', backgroundColor: "rgb(66, 135, 245)" }} className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link style={{ color: "white", fontSize: "x-large" }} className="navbar-brand" href="#"><h1 style={{ fontSize: "x-large" }}>Yashasvi</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" style={{ backgroundColor: "rgb(0, 123, 191)" }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul style={{ fontSize: "large" }} className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("cover-image")} id="nav-home" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("experiences-section")} id="nav-exp" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("whole-certifications")} id="nav-cert" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Certifications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("all-educations")} id="nav-edu" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("project-section")} id="nav-project" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("a-resume")} id="nav-resume" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={()=>scrollToTarget("connect")} id="nav-contact" style={{ color: "white" }} className="nav-link active btn btn-link" aria-current="page">
                    Connect With Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
