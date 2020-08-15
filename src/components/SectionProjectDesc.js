import React from "react";
import clsx from "clsx";

import "./SectionProjectDesc.scss";


const getButton = (props) => {
  if (!props.linkText || !props.linkUrl) return null;
  return (
    <div className="section-project-desc-button-wrapper">
      <a href={props.linkUrl} rel="noopener noreferer">
        <button className="section-project-desc-button">
          {props.linkText}
        </button>
      </a>
    </div>
  )
}

export default function SectionProjectDesc(props) {
  return (
    <div className={clsx("section-project-desc", props.className)}>
      {props.children}
      {getButton(props)}
    </div>
  )
}