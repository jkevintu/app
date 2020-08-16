import React from "react";
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div className="layout">
      <Header isHomePage={true} hasLogo={true} />
      {props.children}
      <Footer></Footer>
    </div>
  )
}