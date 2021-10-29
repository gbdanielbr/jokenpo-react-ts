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
  setPlayer: (player: number) => void;
  playerChoice: string[];
  setPlayerChoice: (playerChoice: string[]) => void;
}

const PlayerChoice: React.FC<PlayerChoiceProps> = ({ player, playerChoice, setPlayerChoice, setPlayer }) => {
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
            <Player1Hand onClick={() => {
              setPlayer(player + 1)
              setPlayerChoice([...playerChoice, 'Rock'])
            }}><img src={Rock1} alt="Rock" />
            </Player1Hand>

            <Player1Hand onClick={() => {
              setPlayerChoice([...playerChoice, 'Paper'])
              setPlayer(player + 1)
            }}><img src={Paper1} alt="Paper" />
            </Player1Hand>

            <Player1Hand onClick={() => {
              setPlayerChoice([...playerChoice, 'Scissors'])
              setPlayer(player + 1)
            }}><img src={Scissors1} alt="Scissors" />
            </Player1Hand>
          </>
        :
          <>
            <Player2Hand onClick={() => {
              setPlayer(player + 1)
              setPlayerChoice([...playerChoice, 'Rock'])
            }}><img src={Rock2} alt="Rock" />
            </Player2Hand>

            <Player2Hand onClick={() => {
              setPlayerChoice([...playerChoice, 'Paper'])
              setPlayer(player + 1)
            }}><img src={Paper2} alt="Paper" />
            </Player2Hand>

            <Player2Hand onClick={() => {
              setPlayerChoice([...playerChoice, 'Scissors'])
              setPlayer(player + 1)
            }}><img src={Scissors2} alt="Scissors" />
            </Player2Hand>
          </>
        }
      </HandContainer>
    </>
  )
}

export default PlayerChoice