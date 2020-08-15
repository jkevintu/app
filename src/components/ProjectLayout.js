import React from "react";
import Header from "./Header"
import Footer from "./Footer"

export default function ProjectLayout(props) {
  return (
    <div className="project-layout">
      <Header isHomePage={false} />
      {props.children}
      <Footer></Footer>
    </div>
  )
}