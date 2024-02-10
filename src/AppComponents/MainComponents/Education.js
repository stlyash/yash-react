import React from 'react'

const Article = (props) => {
  return (
    <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%' }}>
      <div className="card educard hidden-elementsu">
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h6>
          <span>{props.date}</span>
          <p className="card-text">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Education = () => {
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-elementsu");
          } else {
            entry.target.classList.remove("show-elementsu");
          }
        });
      });
      const hiddenElements2 = document.querySelectorAll(".hidden-elementsu");
      hiddenElements2.forEach((el) => observer2.observe(el));
  
  return (
    <div id="all-educations">
    <h2 id="edu-section"style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"6%"}}className="text-primary unselect">Education</h2>
    

    <Article
        title="B. Tech. - Electronics and Communication Engineering (Specialization: Rail Engineering)"
        subtitle="Gati Shakti Vishwavidyalaya, Vadodara, Gujarat"
        date="2020 - 2024"
        content="CGPA: 7.96 (Till 7th Semester)"
      />

      <Article
        title="12th - CBSE - PCM"
        subtitle="Kendriya Vidyalaya No. 1, Patna, Bihar"
        date="2019"
        content="Percentage: 86.4"
      />

      <Article
        title="10th - CBSE"
        subtitle="Kendriya Vidyalaya, Chapra, Bihar"
        date="2017"
        content="CGPA: 9.6"
      />
      </div>
  )
}
