import React from "react";
import "./Hero.scss"

const homePageSize = {
  minHeight: "100vh"
}

const projectPageSize = {
  height: "670px",
  maxHeight: '75vh',
  color: "white",
  textShadow: '1px 1px #888'
}

const textDefaultStyle = {
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}

const getTextStyle = (props) => {
  let coverStyle = (props.isHomePage) ? homePageSize : projectPageSize;
  let style = Object.assign({position: 'absolute'}, textDefaultStyle, coverStyle);
  return style;
}

const getCoverStyle = (props) => {
  let coverStyle = (props.isHomePage) ? homePageSize : projectPageSize;
  let style = Object.assign({}, coverStyle, getBackground(props))
  return style;
}

const getBackground = (props) => {
  let style = {};
  let heroImgUrl = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat";
  if (props.heroImgUrl) {
    heroImgUrl = `url(${props.heroImgUrl}) center center / cover`
    style.filter = "contrast(30%)";
  }
  style.background = heroImgUrl;
  return style;
}

export default function Hero(props) {
  return (
    <div className="hero">
      <div style={getTextStyle(props)}>
        {props.children}
      </div>
      <div style={getCoverStyle(props)}>
      </div>
    </div>
  )
}
