import React from "react";
import "./SectionProjectDesc.scss";

import { Link } from "react-router-dom";


const getButton = (props) => {
  if (!props.linkText || !props.linkUrl) return null;
  return (
    <div className="section-project-desc-button-wrapper">
      <a href={props.linkUrl} target="_blank">
        <button className="section-project-desc-button">
          {props.linkText}
        </button>
      </a>
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