
import React, { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa'
import { Container, Box, Player, Button, ResetButton } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerSelect, setPlayerSelect] = useState<string[]>([])
  const getWinner = () => {
    const player1 = playerSelect[0]
    const player2 = playerSelect[1]

    if(player1 === 'Rock' && player2 === 'Paper') {
      return (
        <>
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
          <h1>Jogador 1 ganhou!</h1>
          <ResetButton onClick={() => {
            setPlayer(1)
            setPlayerSelect([])
          }}>Reiniciar</ResetButton>
        </>
      )
    }
    else {
      return (
        <>
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
            <Player>
              <h1>Jogador {player}</h1>
            </Player>    

            <Button onClick={() => {
              setPlayerSelect([...playerSelect, 'Rock'])
              setPlayer(player + 1)
              }}>
              <FaHandRock size={60} color="darkblue" />
            </Button>

            <Button onClick={() => {
              setPlayerSelect([...playerSelect, 'Paper'])
              setPlayer(player + 1)
              }}>
              <FaHandPaper size={60} color="darkblue" />
            </Button>

            <Button onClick={() => {
              setPlayerSelect([...playerSelect, 'Scissors'])
              setPlayer(player + 1)
              }}>
              <FaHandScissors size={60} color="darkblue" />
            </Button>
          </>
          : getWinner()
        }
      </Box>
    </Container>
  );
}

export default App;