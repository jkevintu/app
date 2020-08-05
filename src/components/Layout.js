import React from "react";
import Header from "./Header"

export default function Layout(props) {
  return (
    <div className="layout">
      <Header isHomePage={true} />
      {props.children}
    </div>
  )
}