
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import copyim from './footer_assets/copy.png';
import doneim from './footer_assets/done.png';
import sign from './footer_assets/signature.png';

export const Footer = () => {
  const [emailCopyStatus, setEmailCopyStatus] = useState(copyim);
  const [phoneCopyStatus, setPhoneCopyStatus] = useState(copyim);

  const copyText = (text, setStatus) => {
    navigator.clipboard.writeText(text)
      .then(() => setStatus(doneim))
      .catch(error => console.error('Copy failed:', error));
    setTimeout(() => setStatus(copyim), 3000);
  };

  return (
    <div>
      <div className="row" style={{ color:"white",alignItems: "center",backgroundColor: "rgb(66, 135, 245)" }}>
        <div className="col firstrow" style={{ margin: "3%" }}>
          <img id="sign" alt="Signature of Yashasvi" src={sign} />
        </div>
        
        <div className="col ctcme secrow" style={{ margin: "3%", textAlign: "center", marginRight: "20%" }}>
          <h3 id="cont">Contact Me</h3>
          <button
            className="coppybut" style={{padding: 0, border: 0, backgroundColor: "transparent" }}
            onClick={() => copyText("yash@yashasvi.dev", setEmailCopyStatus)}
          >
            yash@yashasvi.dev
            <img id="em-cpy" src={emailCopyStatus} alt="Copy Button" />
          </button>
          |  
          <button
            className="coppybut" style={{paddingLeft: "0.4cm", border: 0, backgroundColor: "transparent" }}
            onClick={() => copyText("+91 8540904380", setPhoneCopyStatus)}
          >
            +91 8540904380
            <img id="ph-cpy" src={phoneCopyStatus} alt="Copy Button" />
          </button>
        </div>
        <div style={{ height: "1px", backgroundColor: "rgb(148, 168, 223)" }}></div>
        <span style={{ textAlign: "center", margin: "2%" }}>
          <Link rel="noopener noreferrer" target='_blank' style={{ color: "white" }} to="https://github.com/stlyash/react-website">
            Copyright © 2023 Yashasvi
          </Link>
        </span>
        <div style={{ height: "1px", backgroundColor: "rgb(148, 168, 223)" }}></div>
        <span style={{ textAlign: "center", margin: "2%" }}>
          <Link rel="noopener noreferrer" target='_blank' style={{ color: "white" }} to="https://stlyash.github.io/personal-web/">
            Old Website (HTML,CSS,JS)
          </Link>
        </span>
      </div>
    </div>
  );
};
