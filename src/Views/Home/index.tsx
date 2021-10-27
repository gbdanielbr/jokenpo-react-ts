
import React, { useState } from 'react';

import { Container } from './styles';

const App: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerSelect, setPlayerSelect] = useState<string[]>([])

  return (
    <Container> 
      Hello World
    </Container>
  );

}
export default App;