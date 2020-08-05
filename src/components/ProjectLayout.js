import React from "react";
import Header from "./Header"

export default function ProjectLayout(props) {
  return (
    <div className="project-layout">
      <Header isHomePage={false} />
      {props.children}
    </div>
  )
}