import React from "react";
import Project from "./Project";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
import "./App.css";

export default function App() {

  return (
    <div className="all">
      <div className="intro">
        <h1 className="name">STEPHANIE XIAO</h1>
        <p className="smalltxt">creator //  innovator // designer</p>
      </div>


      <div className="container">
        <h2 className="aboutme">ABOUT ME</h2>
        <p className="text about">hi there! i'm stephanie, and i'm a first year studying computer science and data science at uc berkeley. i'm interested in ui/ux and software development. in my free time, i like to drink boba and take long naps.</p>
      </div>

      <div className="darkpink">
        <div className="darkpink2">
          <div className="experiences">
            <div className="title_exp">
              <h2>EXPERIENCES</h2>
            </div>
            <p>codebase - mentored project developer</p>
            <p>data 8 - academic intern</p>
            <div className="title_edu">
              <h2>EDUCATION</h2>
            </div>
            <p>university of california - berkeley | spring 2023</p>
            <div className="title_cou">
              <h2>COURSEWORK</h2>
            </div>
            <p>data 8 - introduction to data science</p>
            <p>cs61a - structure and interpretation of computer programs</p>
          </div>

          <div className="projects">
            <div className="title_pro">
              <h2>PROJECTS</h2>
            </div>
            <Project
              projectname="educational physics demonstration"
              url="https://github.com/stephaniexiao/physicsdemo"
              language="javascript"
            />
            <Project
              projectname="hog"
              url="https://www.google.com/"
              language="python"
            />
            <Project
              projectname="classifying motives"
              url="https://www.google.com/"
              language="python"
            />
            <Project
              projectname="cardiovascular disease"
              url="https://www.google.com/"
              language="python"
            />
          </div>
        </div>
      </div>

      <div className="contact">
        <h2 className="contactme">CONTACT ME</h2>
        {/* <img className="cloud4" src={cloud4}alt="cloud4"></img> */} 
        <a className="buttonstyle" href="https://www.linkedin.com/in/stephanie-xiao-711588159/"> <img className="button" src={linkedin}alt="button"></img></a>
        <a href="mailto: {stephaniex@berkeley.edu}"><img className="mailer" src={mail}alt="mailer"></img></a>
      </div>
    </div>
  );
}
