import React from "react";
import { HandContainer, Header, Player, Player1Hand, Player2Hand } from "./styles";

import Rock1 from '../../images/rock1.png';
import Rock2 from '../../images/rock2.png';
import Paper1 from '../../images/paper1.png';
import Paper2 from '../../images/paper2.png';
import Scissors1 from '../../images/scissors1.png';
import Scissors2 from '../../images/scissors2.png';

interface PlayerChoiceProps {
  player: number;
  onHandClick: (choice: string) => void
}

const PlayerChoice: React.FC<PlayerChoiceProps> = ({ player, onHandClick }) => {
  return (
    <>
      <Header>
        <h3>escolha</h3>
      </Header>

      <Player>
        <h1>jogador {player}</h1>
      </Player>

      <HandContainer>
        {player == 1 ?
          <>
            <Player1Hand onClick={() => {onHandClick('Rock')}}>
              <img src={Rock1} alt="Rock" />
            </Player1Hand>

            <Player1Hand onClick={() => {onHandClick('Paper')}}>
              <img src={Paper1} alt="Paper" />
            </Player1Hand>

            <Player1Hand onClick={() => {onHandClick('Scissors')}}>
              <img src={Scissors1} alt="Scissors" />
            </Player1Hand>
          </>
        :
          <>
            <Player2Hand onClick={() => {onHandClick('Rock')}}>
              <img src={Rock2} alt="Rock" />
            </Player2Hand>

            <Player2Hand onClick={() => {onHandClick('Paper')}}>
              <img src={Paper2} alt="Paper" />
            </Player2Hand>

            <Player2Hand onClick={() => {onHandClick('Scissors')}}>
              <img src={Scissors2} alt="Scissors" />
            </Player2Hand>
          </>
        }
      </HandContainer>
    </>
  )
}

export default PlayerChoice;