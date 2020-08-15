import React from "react";
import HeaderLink from "./HeaderLink"

const headerStyle = {
  width: "100%",
  padding: "14px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  position: "absolute",
  zIndex: 10
}

const getHeaderLinks = (isHomePage = true) => {
  if (isHomePage) return homePageLinks();
  return projectLink();
}

const homePageLinks = () => {
  return (
    <React.Fragment>
      <HeaderLink href="/app/#about">about</HeaderLink>
      <HeaderLink href="/app/#work">work</HeaderLink>
      <HeaderLink href="/app/#design">design</HeaderLink>
    </React.Fragment>
  )
}

const projectLink = () => {
  return (
    <React.Fragment>
      <HeaderLink href="/app">X</HeaderLink>
    </React.Fragment>
  )
}

export default function Header(props) {
  return (
    <header className="header" style={headerStyle}>
      {getHeaderLinks(props.isHomePage)}
    </header>
  )
}