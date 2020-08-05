import React from "react";
import "./Section.scss";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.props = props;
    const { className = "" } = props;
    this.classes = "section " + className;
  }
  render() {
    return (
      <div id={this.props.sectionId} className={this.classes}>
        {this.props.children}
      </div>
    )
  }
}

export default Section;