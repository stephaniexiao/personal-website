import React from "react";
import "./Project.css";


export default function Project(props) {
    return (
      <div className="project">
        <div className="exp-text">
          <a href={props.url}><h3 className="projectname">{props.projectname}</h3></a>
          <h3 className="language">{props.language}</h3>
        </div>
      </div>
    );
  }