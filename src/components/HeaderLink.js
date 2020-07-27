import React from "react";

const headerLinkStyle = {
  display: "flex",
  color: "white",
  textDecoration: "none",
  lineHeight: "24px",
  fontSize: "calc(10px + 1vmin)",
  padding: "0 20px"
}

const hoverHeaderLink = {
  textDecoration: "underline",
}

const getHeaderLinkStyle = (props, state) => {
  let linkStyle = Object.assign({}, headerLinkStyle);
  if (state.hover) Object.assign(linkStyle, hoverHeaderLink);
  return linkStyle;
}

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.props = props;
  }
  toggleHover (hoverStatus) {
    this.setState({ hover: hoverStatus });
  }
  render() {
    return  (
        <a href={this.props.href}
           style={getHeaderLinkStyle(this.props, this.state)}
           onMouseEnter={() => this.toggleHover(true)}
           onMouseLeave={() => this.toggleHover(false)}>
          <div>
             {this.props.children}
          </div>
        </a>
    )
  
  }
}

export default HeaderLink;