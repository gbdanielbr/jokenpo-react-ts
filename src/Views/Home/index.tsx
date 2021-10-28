
import React, { useState } from 'react';
import Result from './Components/result';
import { Header, Container, Box, HandContainer, Player, Hand, Score } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerChoice, setPlayerChoice] = useState<string[]>([])
  const [score, setScore] = useState<number[]>([0,0])

  const game = () => {
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
          <>
            <>
              <Header>
              <h3>escolha</h3>
              </Header>
            </>
            <Player>
              <h1>jogador {player}</h1>
            </Player>    

            <HandContainer>
            <Hand player={player} onClick={() => {
              setPlayerChoice([...playerChoice, 'Rock'])
              setPlayer(player + 1)
              }}>
              {player == 1 ?
              <img src="./Images/rock1.png" alt="Rock" />
              :               
              <img src="./Images/rock2.png" alt="Rock" />
              }
            </Hand>

            <Hand player={player} onClick={() => {
              setPlayerChoice([...playerChoice, 'Paper'])
              setPlayer(player + 1)
              }}>
              {player == 1 ?
              <img src="./Images/paper1.png" alt="Paper" />
              :               
              <img src="./Images/paper2.png" alt="Paper" />
              }
            </Hand>

            <Hand player={player} onClick={() => {
              setPlayerChoice([...playerChoice, 'Scissors'])
              setPlayer(player + 1)
              }}>
              {player == 1 ?
              <img src="./Images/scissors1.png" alt="Scissors" />
              :               
              <img src="./Images/scissors2.png" alt="Scissors" />
              }
            </Hand>
            </HandContainer>

          </>
          : game()
        }

        <Score>
          <h3>placar</h3>
          <h3>{score[0]} vs {score[1]}</h3>
        </Score>

      </Box>
    </Container>
  );
}

export default App;