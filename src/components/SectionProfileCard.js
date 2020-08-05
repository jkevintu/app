
import React from "react";
import "./SectionProfileCard.scss";


export default function SectionProfileCard(props) {
  return (
    <div className="section-profile-card">
      {props.children}
    </div>
  )
}