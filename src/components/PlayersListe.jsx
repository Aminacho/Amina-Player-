import React from "react";
import "./style.css";

import Players from "./Players";
import { data } from "../data";

function PlayersListe() {
  return (
    <div id="playersListe">
      {data.map((player) => (
        <Players
          imgUrl={player.imgUrl}
          playerName={player.playerName}
          country={player.country}
          
          rank={player.rank}
          hand={player.hand}
          age={player.age}
        />
      ))}
    </div>
  );
}

export default PlayersListe;
