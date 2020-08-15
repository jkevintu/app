import React from "react";
import "./Section.scss";

function Section (props) {

  const { className = "" } = props;
  const classes = "section " + className;

  return (
    <div id={props.sectionId} className={classes}>
      {props.children}
    </div>
  )
}

export default Section;