import React from "react"

const footerStyle = {
  width: "100%",
  padding: "14px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  position: "relative",
  backgroundColor: "#252525",
  color: "#ccc"
}

const Footer = (props) => {
  return (
    <div style={footerStyle}>
      <div style={{
        maxWidth: "1080px",
        margin: "0 auto"
      }}>
        © 2020 Kevin Tu
      </div>
    </div>
  )
}

export default Footer;