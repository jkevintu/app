import React from "react";
import "./Section.scss"

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.props = props;
  }
  render() {
    return (
      <div id={this.props.sectionId} className="section">
        {this.props.children}
      </div>
    )
  }
}

export default Section;