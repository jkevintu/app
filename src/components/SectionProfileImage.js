import React from "react";
import clsx from "clsx";
import "./SectionProfileImage.scss"

export default function SectionProfileImage(props) {
  return (
    <div className={clsx("section-profile-image", props.className)}>
      <img alt={props.name} src={props.imgURL}></img>
    </div>
  )
}