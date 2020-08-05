import React from "react";
import "./Hero.scss"

const homePageHeroStyle = {
  minHeight: "100vh",
  background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}

const projectPageHeroStyle = (heroImgCustomUrl) => {
  let heroImgUrl = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat";
  if (heroImgCustomUrl) heroImgUrl = `url(${heroImgCustomUrl}) center center / cover`;
  return {
    height: "670px",
    maxHeight: '75vh',
    background: heroImgUrl,
    // backgroundSize: 'cover',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: '1px 1px #888'
  }
}

const codeStyle = {
  padding: "0 40px"
}

const homePageBlock = () => {
  return (
    <code style={codeStyle}>
      Be not afraid of greatness: 
      some are born great, 
      some achieve greatness, 
      and some have greatness thrust upon them.
    </code>
  )
}

export default function Hero(props) {
  return (
    <div className="hero">
      <div style={(props.isHomePage) ? homePageHeroStyle : projectPageHeroStyle(props.heroImgUrl)}>
        {(props.isHomePage) ? homePageBlock() : props.children}
      </div>
    </div>
  )
}
