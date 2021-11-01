import React, { useState, useEffect } from 'react';
import Result from './Result';
import { GameHands, getWinningPlayer } from './Rules'
import { Container, Box, Score } from './styles';
import PlayerChoosing from './PlayerChoosing';
import PlayerNumber from './PlayerNumber';

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<GameHands[]>([]);
  const [score, setScore] = useState<number[]>([0]);
  const [winningPlayer, setWinningPlayer] = useState(0);

  const handleOnHowMany = (numberOfPlayers:number) => {
    setNumberOfPlayers(numberOfPlayers)
    setPlayer(1)
  }

  const handleOnHandClick = (hand: GameHands) => {
    setPlayer(player + 1)
    setPlayerChoice([...playerChoice, hand])
  }

  const handleOnReset = () => {
    // for (let i = 0; i < numberOfPlayers; i++) {
    //   setScore([i = 0])
    // }
    setPlayer(1)
    setPlayerChoice([])
    setNumberOfPlayers(0);
  }

  const handleOnAgain = () => {
    setPlayer(1)
    setPlayerChoice([])
  }

  useEffect(() => {
    if(player <= numberOfPlayers) return

    // for (let i = 1; i <= numberOfPlayers; i++) {
    //   const winner = getWinningPlayer(numberOfPlayers, playerChoice[i]);
    // }
    
    // const winner = getWinningPlayer(playerChoice[0], playerChoice[1])
    // setWinningPlayer(winner)

    // if (winner === 1) {
      setScore([score[0]+1,score[1]])
    // } 
    // if (winner === 2) {
      setScore([score[0],score[1]+1])
    // }
    },[player])

  return (
    <Container>   
      <Box>
        {numberOfPlayers < 2 ? (
        <PlayerNumber 
          numberOfPlayers={numberOfPlayers}
          onHowMany={handleOnHowMany}
        />
        ):(player <= numberOfPlayers ?(
            <PlayerChoosing 
              player={player} 
              onHandClick={handleOnHandClick} 
            /> 
        ):(
            <Result 
              player={winningPlayer} 
              onAgain={handleOnAgain} 
              onReset={handleOnReset} 
            /> 
          ))
        }
        {/* <Score>
          <h2>placar</h2>
          <h2>{score[0]} vs {score[1]}</h2>
        </Score> */}

      </Box>
    </Container>
  );
}

export default Home;