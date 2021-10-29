import React, { useState, useEffect } from 'react';
import Result from './Result';
import { GameHands, getWinningPlayer } from './rules'
import { Container, Box, Score } from './styles';
import PlayerChoosing from './PlayerChoosing';

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerChoice, setPlayerChoice] = useState<GameHands[]>([])
  const [score, setScore] = useState<number[]>([0,0])
  const [winningPlayer, setWinningPlayer] = useState(0)

  const handleOnHandClick = (hand: GameHands) => {
    setPlayer(player + 1)
    setPlayerChoice([...playerChoice, hand])
  }

  const handleOnReset = () => {
    setScore([0, 0])
    setPlayer(1)
    setPlayerChoice([])
  }

  const handleOnAgain = () => {
    setPlayer(1)
    setPlayerChoice([])
  }

  useEffect(() => {
    if(player <= 2) return

    const winner = getWinningPlayer(playerChoice[0], playerChoice[1])
    setWinningPlayer(winner)

    if (winner === 1) {
      setScore([score[0]+1,score[1]])
    } 
    if (winner === 2) {
      setScore([score[0],score[1]+1])
    }
    },[player])

  return (
    <Container>   
      <Box>
        {player <= 2 ? 
          (
            <PlayerChoosing 
              player={player} 
              onHandClick={handleOnHandClick} 
            /> 
          )
        : (
            <Result 
              player={winningPlayer} 
              onAgain={handleOnAgain} 
              onReset={handleOnReset} 
            /> 
          )
        }
        <Score>
          <h3>placar</h3>
          <h3>{score[0]} vs {score[1]}</h3>
        </Score>

      </Box>
    </Container>
  );
}

export default Home;