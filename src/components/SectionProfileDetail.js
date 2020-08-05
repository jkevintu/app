import React from "react";
import clsx from "clsx";
import "./SectionProfileDetail.scss"

export default function SectionProfileDetail(props) {
  return (
    <div className={clsx("section-profile-detail", props.className)}>
      {props.children}
    </div>
  )
}