
import React, { useState } from 'react';
import { Header, Container, Box, HandContainer, Player, Hand, AgainButton, ResetButton, Score } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerChoice, setPlayerChoice] = useState<string[]>([])
  const [score, setScore] = useState<number[]>([0,0])
  
  // useEffect(()=>{
  //   setScore([score[0], score[1] + 1])
  // },[score])

  const game = () => {
    const player1 = playerChoice[0]
    const player2 = playerChoice[1]
    
    if(player1 === 'Rock' && player2 === 'Paper') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>jogador 2 ganhou!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
    }
    else if(player1 === 'Rock' && player2 === 'Scissors') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>jogador 1 ganhou!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
    }
    else if(player1 === 'Paper' && player2 === 'Rock') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>jogador 1 ganhou!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
    }
    else if(player1 === 'Paper' && player2 === 'Scissors') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>jogador 2 ganhou!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
    }
    else if(player1 === 'Scissors' && player2 === 'Rock') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>jogador 2 ganhou!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
    }
    else if(player1 === 'Scissors' && player2 === 'Paper') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>jogador 1 ganhou!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
    }
    else {
      return (
        <>
          <h3>Resultado</h3>
          <h1>empate!</h1>
          <AgainButton onClick={() => {
            setPlayer(1)
            setPlayerChoice([])
          }}>de novo</AgainButton>
        </>
      )
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