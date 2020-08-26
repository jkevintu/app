import React from "react";
import clsx from "clsx";
import "./SectionProfileImage.scss"

const imgCaptionStyle = {
  textAlign: 'center',
  fontSize: '0.6em',
  color: '#444'
}

export default function SectionProfileImage(props) {
  return (
    <div className={clsx("section-profile-image", props.className)}>
      <img alt={props.name} src={props.imgURL} loading="lazy"></img>
      { props.name && props.captionShow && <div style={imgCaptionStyle}>{props.name}</div>}
    </div>
  )
}