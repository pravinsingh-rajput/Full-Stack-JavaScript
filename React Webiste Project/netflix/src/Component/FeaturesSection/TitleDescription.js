import React from "react";

function TitleDescription(props) {
  return (
    <div className="details">
      <div className="Feature_title">{props.title}</div>
      <div className="Feature_desc">{props.description}</div>
    </div>
  );
}

export default TitleDescription;
