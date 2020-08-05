import React from "react";
import { Link } from "react-router-dom";

import "./ImageItem.scss";
import DEFAULT_IMG from '../img/default-project-pic.png';

const getSubname = (props) => {
  if (!props.subName) return;
  return (
    <div className="image-item-subname">{props.subName}</div>
  )
}

const getImgHoverClass = (state) => {
  if (state.hover) return "hover";
}
class ImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.props = props;
  }
  toggleHover (hoverStatus) {
    this.setState({ hover: hoverStatus });
  }
  render() {
    return (
      <div className="image-item"
           onMouseEnter={() => this.toggleHover(true)}
           onMouseLeave={() => this.toggleHover(false)}>
        <Link to={this.props.url || "#"}>
          <div className="image-item-name-wrapper">
              {this.props.name}
              {getSubname(this.props)}
          </div>
          <img className={getImgHoverClass(this.state)} src={this.props.imgSrc || DEFAULT_IMG} alt={this.props.name}></img>
        </Link>        
      </div>
    )  
  }
}

export default ImageItem;
