
import React, { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa'
import { Container, Box, Player, Button } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerSelect, setPlayerSelect] = useState<string[]>([])

  return (
    <Container>   
      <Box>
        <>
          <Player>
            <h1>Player {player}</h1>
          </Player>    

          <Button onClick={() => {
            setPlayerSelect([...playerSelect, 'Pedra'])
            setPlayer(player + 1)
            }}>
            <FaHandRock size={60} color="darkblue" />
          </Button>

          <Button onClick={() => {
            setPlayerSelect([...playerSelect, 'Pedra'])
            setPlayer(player + 1)
            }}>
            <FaHandPaper size={60} color="darkblue" />
          </Button>

          <Button onClick={() => {
            setPlayerSelect([...playerSelect, 'Pedra'])
            setPlayer(player + 1)
            }}>
            <FaHandScissors size={60} color="darkblue" />
          </Button>
        </>
      </Box>
    </Container>

  );
}

export default App;