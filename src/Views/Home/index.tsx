import React, { useState } from 'react';
import Result from './Result';
import { Container, Box, Score } from './styles';
import PlayerChoice from './PlayerChoice';

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerChoice, setPlayerChoice] = useState<string[]>([])
  const [score, setScore] = useState<number[]>([0,0])

  const getResult = () => {
    const player1 = playerChoice[0]
    const player2 = playerChoice[1]
    
    if(player1 === 'Rock' && player2 === 'Paper') {
      return (<Result player={2} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score} />)
    }
    else if(player1 === 'Rock' && player2 === 'Scissors') {
      return (<Result player={1} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score}/>)
    }
    else if(player1 === 'Paper' && player2 === 'Rock') {
      return (<Result player={1} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score}/>)
    }
    else if(player1 === 'Paper' && player2 === 'Scissors') {
      return (<Result player={2} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score}/>)
    }
    else if(player1 === 'Scissors' && player2 === 'Rock') {
      return (<Result player={2} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score}/>)
    }
    else if(player1 === 'Scissors' && player2 === 'Paper') {
      return (<Result player={1} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score}/>)
    }
    else {
      return (<Result player={0} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice} setScore={setScore} score={score}/>)
    }
}

  return (
    <Container>   
      <Box>
        {player <= 2 ?
        ( 
          <PlayerChoice player={player} playerChoice={playerChoice} setPlayer={setPlayer} setPlayerChoice={setPlayerChoice}/>
        ) : 
        getResult()
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