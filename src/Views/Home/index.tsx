import React, { useState } from 'react';
import Result from './Result';
import { Container, Box, Score, Player1Hand } from './styles';
import PlayerChoice from './PlayerChoice';

type PlayerOptions = 'Rock' | 'Paper' | 'Scissors'

const rules = { // O objeto rules guarda a condição de vitória de para cada escolha do jogador
  Rock: ['Scissors'],
  Paper: ['Rock'],
  Scissors: ['Paper']
}

// Abaixo acontece a seguinte verificação: 
// se a escolha do segundo jogador contemplar a condição de vitória 
// da escolha do primeiro jogador, será retornado o número 1
// Já se a escolha do primeiro jogador contemplar a condição de vitória
// da escolha do segundo jogador, será retornado o número 2

const getWinningPlayer = (player1Choice: PlayerOptions, player2Choice: PlayerOptions): number => {
  const player1WinningCondition = rules[player1Choice]
  if (player1WinningCondition.includes(player2Choice)) return 1
  
  const player2WinningCondition = rules[player2Choice]
  if (player2WinningCondition.includes(Player1Hand)) return 2

  return 0
}

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerChoice, setPlayerChoice] = useState<string[]>([])
  const [score, setScore] = useState<number[]>([0,0])

  const handleOnHandClick = (hand: string) => {
    setPlayer(player + 1)
    setPlayerChoice([...playerChoice, hand])
  }

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
        (<PlayerChoice player={player} onHandClick={handleOnHandClick}/>) 
        : 
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