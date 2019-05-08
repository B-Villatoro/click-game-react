import React from "react";
// import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" key={props.id}>
      <div className="img-container">
        <img alt={props.name} src={props.image} width="200" height="200"/>
      </div>
    </div>
  );
}

export default CharacterCard;
