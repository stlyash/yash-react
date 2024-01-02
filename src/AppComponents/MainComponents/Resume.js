import React from 'react'

// PDF download try
function downloadPDF() {
  var link = document.createElement('a');
  link.href = 'https://docs.google.com/document/d/1oPHBR7crOcbPcvlmqdAeCYk6LepS2qa9BB-LuHM5ijI/edit?usp=sharing';
  link.target='_blank';
  link.click();
}


// Scroll to top button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
export const Resume = () => {
  return (
    <>
    <button  className="buttontopb" id="scrollToTopBtn" style={{zIndex: "5"}} onClick={()=>scrollToTop()}>
  <span className="shadowtopb"></span>
  <span className="edgetopb"></span>
  <span className="fronttopb texttopb" style={{display: "flex", justifyContent: "center",
   alignItems: "center"}}><span style={{display: "flex", justifyContent: "center",
    alignItems: "center",transform:"scale(1.5)"}}>Top</span>
  </span>
</button>

    <div id="a-resume">
        <div style={{paddingLeft:"10%", paddingRight:"10%",paddingTop:"6%",paddingBottom:"4%"}}>
    <h2 id="resume-section" className="text-primary "style={{paddingBottom:"2%"}}>Resume</h2>

      <iframe id="res" title="Resume"
      src="https://drive.google.com/file/d/1oPHBR7crOcbPcvlmqdAeCYk6LepS2qa9BB-LuHM5ijI/preview" 
      width="100%" allow="autoplay"></iframe>

      <button style={{margin:"5px"}} onClick={()=>downloadPDF()} className="btno"> Download Resume
      </button>
    </div>
    </div>
  </>
  )
}
