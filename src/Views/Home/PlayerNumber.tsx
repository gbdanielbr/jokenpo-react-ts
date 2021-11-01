import React from "react";
import { Dropdown, HowManyPlayersButton } from "./styles"

interface PlayerNumberProps {
  numberOfPlayers: number;
  onHowMany: (numberOfPlayers: number) => void;
}

const PlayerNumber: React.FC<PlayerNumberProps> = ({onHowMany}) => {
  return (
    <>
      <h1><br/><br/>quantidade de jogadores</h1>
      <Dropdown>
        <HowManyPlayersButton>selecione
          <a onClick={() => {onHowMany (2)}} className="dropdown-item">2</a>
          <a onClick={() => {onHowMany (3)}} className="dropdown-item">3</a>
          <a onClick={() => {onHowMany (4)}} className="dropdown-item">4</a>
        </HowManyPlayersButton>
      </Dropdown>
    </>
  )
}

export default PlayerNumber;