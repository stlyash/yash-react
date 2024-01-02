import React from 'react'
import {Link} from "react-router-dom";
// Drop down of certifications
function clicked(params) {
  var collapsible1 = document.getElementById('collapse'+params+'Button');
collapsible1.click();
}

export const Certifications = () => {
  return (
    <div>
      <article id="whole-certifications">
    <h2 id="certs-section"style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"6%"}}className="text-primary">Certifications</h2>
    <div style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"2%"}}>
      <div style={{paddingBottom: "2%"}}>
        <div id="front-end" className="card spcard" >
            <div className="card-header" id="headingOne" onClick={()=>clicked("One")}>
                
                    <Link rel="noopener noreferrer" className="btn" id="collapseOneButton" data-bs-toggle="collapse" to="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>1. Meta Front-End Development Professional Certificate</h5>
                    </Link>
            </div>
            <div className="collapse" id="collapseOne">
                <div className="card card-body">
                    <ul>
                        <li>Introduction to Front-End Development		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/T92SSTMMCWBC" target="_blank">Link</Link>]</li>
                        <li>Programming in JavaScript		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/C88VKZ6WCGKZ" target="_blank">Link</Link>]</li>
                        <li>Version Control		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/NL8JSWH2D3D5" target="_blank">Link</Link>]</li>
                        <li>HTML and CSS in Depth    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/K9RNQEWEMYNC" target="_blank">Link</Link>]</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div style={{paddingBottom: "2%"}}>
        <div className="card spcard">
            <div className="card-header" id="headingTwo" onClick={()=>clicked("Two")}>
                    <Link rel="noopener noreferrer" className="btn"  id="collapseTwoButton"  data-bs-toggle="collapse" to="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>2. Google Data Analytics Professional Certificate</h5>
                    </Link>
            </div>
            <div className="collapse" id="collapseTwo">
                <div className="card card-body">
                    <ul>
                        <li>Foundations: Data, Data, Everywhere   [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/39F4AFDRSG8R" target="_blank">Link</Link>]</li>
                        <li>Ask Questions to Make Data-Driven Decisions   [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/LZS3F5VZCWL7" target="_blank">Link</Link>]</li>
                        <li>Prepare Data for Exploration    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/3CH36JKEDP57" target="_blank">Link</Link>]</li>
                        <li>Process Data from Dirty to Clean    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/35SVEASNYZ2L" target="_blank">Link</Link>]</li>
                        <li>Analyze Data to Answer Questions    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/WXLWHUYLZN7V" target="_blank">Link</Link>]</li>
                     </ul>
                </div>
            </div>
        </div>
      </div>

      <div style={{paddingBottom: "2%"}}>
        <div className="card spcard">
            <div className="card-header" id="headingThree" onClick={()=>clicked("Three")}>
                    <Link rel="noopener noreferrer" className="btn"  id="collapseThreeButton"  data-bs-toggle="collapse" to="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>3. Guided Projects on Linux</h5>
                    </Link>
            </div>
            <div className="collapse" id="collapseThree">
                <div className="card card-body">
                    <ul>
                        <li>Getting started in Ubuntu Linux		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/DQU8B72WWGEY" target="_blank">Link</Link>] </li>
                        <li>Command Line Basics in Linux			[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/9M72JMJPN3NL" target="_blank">Link</Link>]</li>
                        <li>Files and Directories in Linux File-system			[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/UKR2HPNATZK2" target="_blank">Link</Link>]</li>
                      </ul>
                </div>
            </div>
        </div>
      </div>

      <div style={{paddingBottom: "2%"}}>
        <div className="card spcard">
            
            <div className="card-header" id="headingFour" onClick={()=>clicked("Four")}>
                    <Link rel="noopener noreferrer" className="btn"  id="collapseFourButton" data-bs-toggle="collapse" to="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>4. Google Project Management: Professional Certificate</h5>
                    </Link>
            </div>
            
            <div className="collapse" id="collapseFour">
                <div className="card card-body">
                    <ul>
                        <li>Foundations of Project Management		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/JEPGSDMKJG2A" target="_blank">Link</Link>] </li>
                        <li>Project Initiation: Starting a Successful Project		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/S7KDDR7X7SEW" target="_blank">Link</Link>]</li>
                        <li>Project Planning: Putting It All Together		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/NKJHFBGJX5XM" target="_blank">Link</Link>] </li>
                      </ul>
                </div>
            </div>
        </div>
      </div>

    </div>
  </article>
    </div>
  )
}
