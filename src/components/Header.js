import React from "react";
import HeaderLink from "./HeaderLink"

const headerStyle = {
  width: "100%",
  padding: "14px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  position: "absolute"
}

const getHeaderLinks = (isHomePage = true) => {
  if (isHomePage) return homePageLinks();
  return projectLink();
}

const homePageLinks = () => {
  return (
    <React.Fragment>
      <HeaderLink href="/app#about">about</HeaderLink>
      <HeaderLink href="/app#projects">projects</HeaderLink>
      <HeaderLink href="/app#designs">designs</HeaderLink>
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