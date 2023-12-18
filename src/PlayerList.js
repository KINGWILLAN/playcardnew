import React from "react";
import { playerJSON } from "./players";
import Player from "./Player";

const PlayerList = () => {
  const players = JSON.parse(playerJSON);
  return (
    <div className="d-flex gap-3 mt-5">
      {players.map((item) => {
        return (
          <div key={item.id}>
            <Player {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerList;
