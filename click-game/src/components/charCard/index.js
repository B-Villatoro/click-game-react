import React from "react";
// import "./style.css";

function CharacterCard(props) {
  return (
  <img className="ducky" alt={props.name} src={props.image} width="150" height="150" onClick={()=>props.handleClick(props.id) } value={props.clicked? "true":"false"}/>  
  );
}

export default CharacterCard;
