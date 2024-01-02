import React, { useState }  from 'react';
import {ProjectCards} from './ProjectAssetss/ProjectCards.js';
import cppStlLogo from './ProjectAssetss/cpp-stl-logo.png';
import drivinglogo from './ProjectAssetss/new-driving.png';
import matrixlogo from './ProjectAssetss/matrix-man-logo.png';
import resumesc from './ProjectAssetss/resume-parser.png';
import reactweb from './ProjectAssetss/new-react.png';
import stlprime from './ProjectAssetss/stl-prime.png';
import deter from './ProjectAssetss/deter.png';
import polrec from './ProjectAssetss/polar-rect.png';
//---------------------------------------------------------------------------
export const Projects = () => {
  const [webState, setWebState] = useState(true);
  const [androidState, setAndroidState] = useState(false);
  const [pythonState, setPythonState] = useState(false);
  const [show, setShow] = useState("web");

  const projects=
    [
      {
        title:"Driving Technique",
        image:drivinglogo,
        desc:"Website for Evaluation of Driving Technique of Loco Pilots",
        link:"https://stlyash.github.io/Driving/",
        type:"web"
      },
      {
        title:"My React Website",
        image:reactweb,
        desc:"Created my personal website using React and Bootstrap",
        link:"https://www.yashasvi.dev",
        type:"web"
      },
      {
        title:"STL C++ App",
        image:cppStlLogo,
        desc:"Developed an Android App which introduces STL libraries of C++ | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 1.5k (Oct,2023)",
        link:"https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.stlcpp",
        type:"android"
      },
      {
        title:"STL Prime App",
        image:stlprime,
        desc:"Created a prime and paid version of the C++ STL App | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 13 (Oct,2023)",
        link:"https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.webexp",
        type:"android"
      },
      {
        title:"Determinant Calculator",
        image:deter,
        desc:"An app that calculates determinant of order 2,3 and 4 | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 996 (Oct,2023)",
        link:"https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.determinantCalculator",
        type:"android"
      },
      {
        title:"Polar to Rect. Form Converter",
        image:polrec,
        desc:`Created an App which converts Polar to Rectangular Coordinates and vice-versa | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 1.28k (Oct,2023)`,
        link:"https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.rectangluarToPolarConv",
        type:"android"
      },
      {
        title:"Matrix Man App",
        image:matrixlogo,
        desc:"Created an App which can calculate Determinant, Inverse,etc. | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 406 (Oct,2023)",
        link:"https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.MatrixMan",
        type:"android"
      },
      {
        title:"Resume Parser",
        image:resumesc,
        desc:"Developed a resume parser in Python using Spacy",
        link:"https://colab.research.google.com/drive/1I3G8cj53AYda24XR8q4rn-6KJIF6h4OT?usp=sharing",
        type:"python"
      }
    ]

  const tabPressed = (tab) => {
    if (tab === 'Web') {
      setWebState(true);
      setAndroidState(false);
      setPythonState(false);
      setShow("web");
    } else if (tab === 'Android') {
      setWebState(false);
      setAndroidState(true);
      setPythonState(false);
      setShow("android");
    } else {
      setWebState(false);
      setAndroidState(false);
      setPythonState(true);
      setShow("python");
    }

  };

  const renderCards = () => {
    return projects
      .filter((project) => project.type === show)
      .map((project, index) => (
        <ProjectCards key={index} project={project} />
      ));
  };

  return (
    <div>
      <h2 id="project-section" className="text-primary " 
      style={{paddingBottom: "2%",paddingLeft: "10%",paddingTop:"6%"}}>
        Projects
      </h2>

      <article id="all-projects" style={{margin:"0 12%",backgroundColor:"rgb(63, 127, 231,0.1)"}}>
        <div className='container-fluid'style={{padding:"0",border:"solid 2px rgb(63, 127, 231)",borderRadius:"0.7em"}}>
          <div className='row custom-no-gutters'>
            
          <div className='col-4  myposter' onClick={()=>tabPressed("Web")}>
            <h4 style={{borderBottom: webState? "solid 1px rgb(63, 127, 231)" : "none",
            textAlign:"center",backgroundColor:`rgb(63, 127, 231,${webState?0.2:0.1})`,
            paddingTop:"1em",paddingBottom:"1em"}}>Web</h4>
          </div>
          <div className='col-4  myposter' onClick={()=>tabPressed("Android")}>
            <h4 style={{borderBottom: androidState ? "solid 1px rgb(63, 127, 231)" : "none",
            borderLeft:"solid 1px rgb(63, 127, 231,0.2)",borderRight:"solid 1px rgb(63, 127, 231,0.2)",
            textAlign:"center",backgroundColor:`rgb(63, 127, 231,${androidState?0.2:0.1})`,
            paddingTop:"1em",paddingBottom:"1em"}}>Android</h4>
          </div>
          <div className='col-4 myposter' onClick={()=>tabPressed("Python")}>
            <h4 style={{borderBottom: pythonState ? "solid 1px rgb(63, 127, 231)" : "none",
            textAlign:"center",backgroundColor:`rgb(63, 127, 231,${pythonState?0.2:0.1})`,
            paddingTop:"1em",paddingBottom:"1em"}}>Python</h4>
          </div>
          </div>

          <div className='container-fluid'>
            <div className="row">
              {renderCards()}
            </div>
          </div>
        </div>
      </article>

    </div>
  );
};
