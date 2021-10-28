
import React, { useState } from 'react';
import Result from './Result';
import { Header, Container, Box, HandContainer, Player, Player1Hand, Player2Hand, Score } from './styles';
import Rock1 from '../../images/rock1.png'
import Rock2 from '../../images/rock2.png'
import Paper1 from '../../images/paper1.png'
import Paper2 from '../../images/paper2.png'
import Scissors1 from '../../images/scissors1.png'
import Scissors2 from '../../images/scissors2.png'

const App: React.FC = () => {
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
          <>
            <Header>
              <h3>escolha</h3>
            </Header>

            <Player>
              <h1>jogador {player}</h1>
            </Player>

            <HandContainer>
              {player == 1 ?
                <>
                  <Player1Hand onClick={() => {
                    setPlayer(player + 1)
                    setPlayerChoice([...playerChoice, 'Rock'])
                  }}>
                    <img src={Rock1} alt="Rock" />
                  </Player1Hand>

                  <Player1Hand onClick={() => {
                    setPlayerChoice([...playerChoice, 'Paper'])
                    setPlayer(player + 1)
                  }}>
                    <img src={Paper1} alt="Paper" />
                  </Player1Hand>

                  <Player1Hand onClick={() => {
                    setPlayerChoice([...playerChoice, 'Scissors'])
                    setPlayer(player + 1)
                  }}>
                    <img src={Scissors1} alt="Scissors" />
                  </Player1Hand>
                </>
              :
                <>
                  <Player2Hand onClick={() => {
                    setPlayer(player + 1)
                    setPlayerChoice([...playerChoice, 'Rock'])
                  }}>
                    <img src={Rock2} alt="Rock" />
                  </Player2Hand>

                  <Player2Hand onClick={() => {
                    setPlayerChoice([...playerChoice, 'Paper'])
                    setPlayer(player + 1)
                  }}>
                    <img src={Paper2} alt="Paper" />
                  </Player2Hand>

                  <Player2Hand onClick={() => {
                    setPlayerChoice([...playerChoice, 'Scissors'])
                    setPlayer(player + 1)
                  }}>
                    <img src={Scissors2} alt="Scissors" />
                  </Player2Hand>
                </>
              }
            </HandContainer>
          </>
          : getResult()
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