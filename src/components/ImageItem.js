import React from "react";
import "./ImageItem.scss";
import DEFAULT_IMG from '../img/default-project-pic.png';

const getSubname = (props) => {
  if (!props.subName) return;
  return (
    <div class="image-item-subname">{props.subName}</div>
  )
}

export default function ImageItem(props) {
  return (
    <div className="image-item">
      <div className="image-item-name-wrapper">
          {props.name}
          {getSubname(props)}
      </div>
      <img src={props.imgSrc || DEFAULT_IMG} alt={props.name}></img>
    </div>
  )
}