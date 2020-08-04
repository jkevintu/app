import React from "react";
import "./SectionProjectDesc.scss";

import { Link } from "react-router-dom";


const getButton = (props) => {
  console.log(props);
  if (!props.linkText || !props.linkUrl) return null;
  return (
    <div className="section-project-desc-button-wrapper">
      <Link to={props.linkUrl}>
        <button className="section-project-desc-button">
          {props.linkText}
        </button>
      </Link>
    </div>
  )
}

export default function SectionProjectDesc(props) {
  return (
    <div className="section-project-desc">
      {props.children}
      {getButton(props)}
    </div>
  )
}