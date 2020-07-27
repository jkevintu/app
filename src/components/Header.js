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

export default function Header(props) {
  return (
    <header className="header" style={headerStyle}>
      <HeaderLink href="#about">about</HeaderLink>
      <HeaderLink href="#projects">projects</HeaderLink>
      <HeaderLink href="#artworks">artworks</HeaderLink>
    </header>
  )
}