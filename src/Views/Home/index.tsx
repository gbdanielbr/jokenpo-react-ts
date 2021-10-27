
import React, { useState } from 'react';
import { Header, Container, Box, ButtonContainer, Player, Button, ResetButton, Placar } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerSelect, setPlayerSelect] = useState<string[]>([])
  const [count, setCount] = useState<number[]>([0,0])
  const getWinner = () => {
    const player1 = playerSelect[0]
    const player2 = playerSelect[1]

    if(player1 === 'Rock' && player2 === 'Paper') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Jogador 2 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
        </>
      )
    }
    else if(player1 === 'Rock' && player2 === 'Scissors') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Jogador 1 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
        </>
      )
    }
    else if(player1 === 'Paper' && player2 === 'Rock') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Jogador 1 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
        </>
      )
    }
    else if(player1 === 'Paper' && player2 === 'Scissors') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Jogador 2 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
        </>
      )
    }
    else if(player1 === 'Scissors' && player2 === 'Rock') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Jogador 2 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
        </>
      )
    }
    else if(player1 === 'Scissors' && player2 === 'Paper') {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Jogador 1 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>reiniciar</ResetButton>
        </>
      )
    }
    else {
      return (
        <>
          <h3>Resultado</h3>
          <h1>Empate!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
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
              <h1>Jogador {player}</h1>
            </Player>    

            <ButtonContainer>
            <Button onClick={() => {
              setPlayerSelect([...playerSelect, 'Rock'])
              setPlayer(player + 1)
              }}>
              <img src="./Images/rock.png" width="100" alt="Rock" />
            </Button>

            <Button onClick={() => {
              setPlayerSelect([...playerSelect, 'Paper'])
              setPlayer(player + 1)
              }}>
              <img src="./Images/paper.png" width="100" alt="Paper" />
            </Button>

            <Button onClick={() => {
              setPlayerSelect([...playerSelect, 'Scissors'])
              setPlayer(player + 1)
              }}>
              <img src="./Images/scissors.png" width="100" alt="Scissors" />
            </Button>
            </ButtonContainer>
          </>
          : getWinner()
        }

        <Placar>
          <h4>pontuação</h4>
          <h5>Jogador 1 {count[0]} vs {count[1]} Jogador 2</h5>
        </Placar>

      </Box>
    </Container>
  );
}

export default App;