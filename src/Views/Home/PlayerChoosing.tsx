import React from "react";
import { GameHands } from "./rules"
import { HandContainer, Header, Rules, Player, Player1Hand, Player2Hand } from "./styles";

import RulesImage from '../../images/rules.png';
import Rock from '../../images/rock.png';
import Paper from '../../images/paper.png';
import Scissors from '../../images/scissors.png';
import Lizard from '../../images/lizard.png';
import Spock from '../../images/spock.png';

interface PlayerChoosingProps {
  player: number;
  onHandClick: (choice: GameHands) => void
}

const PlayerChoosing: React.FC<PlayerChoosingProps> = ({ player, onHandClick }) => {
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
              <img src={Rock} alt="Rock" />
            </Player1Hand>

            <Player1Hand onClick={() => {onHandClick('Paper')}}>
              <img src={Paper} alt="Paper" />
            </Player1Hand>

            <Player1Hand onClick={() => {onHandClick('Scissors')}}>
              <img src={Scissors} alt="Scissors" />
            </Player1Hand>

            <Player1Hand onClick={() => {onHandClick('Paper')}}>
              <img src={Lizard} alt="Lizard" />
            </Player1Hand>

            <Player1Hand onClick={() => {onHandClick('Scissors')}}>
              <img src={Spock} alt="Spock" />
            </Player1Hand>
          </>
        :
          <>
            <Player2Hand onClick={() => {onHandClick('Rock')}}>
              <img src={Rock} alt="Rock" />
            </Player2Hand>

            <Player2Hand onClick={() => {onHandClick('Paper')}}>
              <img src={Paper} alt="Paper" />
            </Player2Hand>

            <Player2Hand onClick={() => {onHandClick('Scissors')}}>
              <img src={Scissors} alt="Scissors" />
            </Player2Hand>

            <Player2Hand onClick={() => {onHandClick('Paper')}}>
              <img src={Lizard} alt="Lizard" />
            </Player2Hand>

            <Player2Hand onClick={() => {onHandClick('Scissors')}}>
              <img src={Spock} alt="Spock" />
            </Player2Hand>
          </>
        }
      </HandContainer>
      <Rules><img src={RulesImage} alt="Rules" /> </Rules>
    </>
  )
}

export default PlayerChoosing;