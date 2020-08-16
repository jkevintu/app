import React from "react";
import { Link } from "react-router-dom"
import HeaderLink from "./HeaderLink"

import logoImg from "../img/logo.png";

const headerStyle = {
  width: "100%",
  padding: "5px 0",
  height: "42px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "absolute",
  zIndex: 10
}

const getHeaderLinks = (isHomePage = true) => {
  if (isHomePage) return homePageLinks();
  return projectLink();
}

const homePageLinks = () => {
  return (
    <div className="header-links"
      style={{
        display: 'flex',
        paddingRight: '12px'
      }}>
      <HeaderLink href="/app/#about">about</HeaderLink>
      <HeaderLink href="/app/#work">work</HeaderLink>
      <HeaderLink href="/app/#design">design</HeaderLink>
    </div>
  )
}

const getLogos = (props) => {
  return (
    <div className="logo-wrapper">
      {props.hasLogo &&
        <Link to={props.headerLogoUrl || "/app/"}>
          <div className="logo" style={{
            height: '100%',
            paddingLeft: '24px',
            width: '42px'
          }}>
            <img alt="Home" style={{height: '100%', width: '100%'}} src={logoImg}></img>
          </div>
        </Link>
      }
    </div>
  )
}

const projectLink = () => {
  return (
    <div className="header-links"
      style={{
        display: 'flex',
        paddingRight: '12px'
      }}>
      <HeaderLink href="/app">X</HeaderLink>
    </div>
  )
}

export default function Header(props) {
  return (
    <header className="header" style={headerStyle}>
      {getLogos(props)}
      {getHeaderLinks(props.isHomePage)}
    </header>
  )
}