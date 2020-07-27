import React from "react";
import "./ImageItem.scss";
import DEFAULT_IMG from '../img/default-project-pic.png';

export default function ImageItem(props) {
  return (
    <div className="image-item">
      <div className="image-item-name-wrapper">
          {props.name}
      </div>
      <img src={props.imgSrc || DEFAULT_IMG} alt={props.name}></img>
    </div>
  )
}