import React, { useState } from "react";

const headerLinkStyle = {
  display: "flex",
  color: "white",
  textDecoration: "none",
  lineHeight: "24px",
  fontSize: "calc(10px + 1vmin)",
  padding: "0 20px"
};

const hoverHeaderLink = {
  textDecoration: "underline",
}

const getHeaderLinkStyle = (props, state) => {
  let linkStyle = Object.assign({}, headerLinkStyle);
  if (state.hover) Object.assign(linkStyle, hoverHeaderLink);
  return linkStyle;
}

const HeaderLink = (props) => {

  const [hover, setHover] = useState(false);
  function toggleHover (hoverStatus) {
    setHover(hoverStatus);
  }
  
  return  (
      <a href={props.href}
          style={getHeaderLinkStyle(props, {hover: hover})}
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}>
        <div>
            {props.children}
        </div>
      </a>
  )
  
}

export default HeaderLink;