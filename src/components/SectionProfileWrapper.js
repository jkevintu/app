import React from "react"
import "./SectionProfileWrapper.scss"

export default function SectionProfileWrapper(props) {
  return (
    <div className="section-project-wrapper">
      {props.children}
    </div>
  )
}