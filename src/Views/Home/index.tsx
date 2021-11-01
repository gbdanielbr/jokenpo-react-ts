import React, { useState, useEffect } from 'react';
import Result from './Result';
import { GameHands, getWinningPlayers } from './rules'
import { Container, Box, Score } from './styles';
import PlayerChoosing from './PlayerChoosing';
import PlayerNumber from './PlayerNumber';

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<GameHands[]>([]);
  const [score, setScore] = useState<number[]>([]);
  const [winners, setWinners] = useState<number[]>([]);

  const handleOnHowMany = (numberOfPlayers:number) => {
    setNumberOfPlayers(numberOfPlayers)
    setPlayer(1)

    for (let i = 0; i < numberOfPlayers; i++) {score[i] = 0}
    setScore(score)
  }

  const handleOnHandClick = (hand: GameHands) => {
    setPlayerChoice([...playerChoice, hand])
    setPlayer(player + 1)
  }

  const handleOnReset = () => {
    for (let i = 0; i < numberOfPlayers; i++) {score[i] = 0}
    setScore(score)

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

    const winners = getWinningPlayers(numberOfPlayers, playerChoice)
    setWinners(winners)

    console.log(score)
    winners.forEach((player, i) => {
      score[i-1] += 1
    })

    setScore(score)
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
              numberOfPlayers={numberOfPlayers}
              winners={winners}
              onAgain={handleOnAgain} 
              onReset={handleOnReset} 
            /> 
          ))
        }
        <Score>
          <h2>placar</h2>
          <h3>{score.join(` vs `)}</h3>
        </Score>

      </Box>
    </Container>
  );
}

export default Home;