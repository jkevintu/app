import React, { useState } from "react";
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

const defaultBlackBackground = () => {
  return {
    background: '#000',
    objectFit: 'fill',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    opacity: 0.4
  }
}

const ImageItem = (props)  => {
  const [hover, setHover] = useState(false);

  function toggleHover (hoverStatus) {
    setHover(hoverStatus);
  }
  return (
    <div className="image-item"
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}>
      <Link to={props.url || "#"}>
        <div className="image-item-name-wrapper">
            <div style={{ textTransform: '', fontWeight: 'bold'}}>
              {props.name}
            </div>
            {getSubname(props)}
        </div>
        { !props.imgSrc &&
          <div style={defaultBlackBackground()}></div>
        }
        <img className={getImgHoverClass({hover: hover})}
             src={props.imgSrc || DEFAULT_IMG}
             alt={props.name}
             loading="lazy"></img>
      </Link>
    </div>
  )
}

export default ImageItem;
