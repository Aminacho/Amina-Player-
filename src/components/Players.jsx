import React from "react";

function Players(props) {
  return (
    <div id="player-item">
      <img src={props.imgUrl} alt="" />
      <h1> {props.playerName}</h1>
      <h3> {props.country}</h3>

      <h4> RANK: {props.rank} 🌟</h4>
      <h4>Hand: {props.hand}</h4>
      <h4>Age: {props.age}</h4>
    </div>
  );
}

export default Players;
