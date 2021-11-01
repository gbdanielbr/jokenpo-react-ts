import React from "react";
import { GameHands } from "./Rules"
import { HandContainer, Header, Rules, Player, RockButton, PaperButton, ScissorsButton, LizardButton, SpockButton } from "./styles";
import RulesImage from '../../images/rules.png';
import Rock from '../../images/rock.png';
import Paper from '../../images/paper.png';
import Scissors from '../../images/scissors.png';
import Lizard from '../../images/lizard.png';
import Spock from '../../images/spock.png';

interface PlayerChoosingProps {
  player: number;
  onHandClick: (choice: GameHands) => void;
}

const PlayerChoosing: React.FC<PlayerChoosingProps> = ({ player, onHandClick }) => {
  return (
    <>
      <Header>
        <h2>escolha</h2>
      </Header>
      <Player>
        <h1>jogador {player}</h1>
      </Player>
      <HandContainer player={player}>
          <>
            <RockButton className="button" onClick={() => {onHandClick('Rock')}}>
              <img src={Rock} alt="Rock" />
            </RockButton>

            <PaperButton className="button" onClick={() => {onHandClick('Paper')}}>
              <img src={Paper} alt="Paper" />
            </PaperButton>

            <ScissorsButton className="button" onClick={() => {onHandClick('Scissors')}}>
              <img src={Scissors} alt="Scissors" />
            </ScissorsButton>

            <LizardButton className="button" onClick={() => {onHandClick('Lizard')}}>
              <img src={Lizard} alt="Lizard" />
            </LizardButton>

            <SpockButton className="button" onClick={() => {onHandClick('Spock')}}>
              <img src={Spock} alt="Spock" />
            </SpockButton>
          </>
      </HandContainer>
      <Rules><img src={RulesImage} alt="Rules" /> </Rules>
    </>
  )
}

export default PlayerChoosing;