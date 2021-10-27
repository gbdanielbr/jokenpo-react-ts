
import React, { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa'
import { Container, Box } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerSelect, setPlayerSelect] = useState<string[]>([])

  return (
    <Container> 
      <Box>
            <FaHandRock>
            </FaHandRock>

            <FaHandPaper>
            </FaHandPaper>

            <FaHandScissors>
            </FaHandScissors>

      </Box>
    </Container>

  );

}
export default App;