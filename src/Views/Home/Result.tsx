import { AgainButton, ResetButton } from "./styles"

interface Props {
  onAgain: () => void;
  onReset: () => void;
  winners: number[];
  numberOfPlayers: number;
}

const Result: React.FC<Props> = ({ winners, onAgain, onReset, numberOfPlayers }) => {

  const players:number[] = []

  winners.forEach((player, i) => {
    players.push(i)
  })

  return(
    <>
      <h2>Resultado</h2>
      {players.length == 0 || players.length == numberOfPlayers ? 
      <h1>empate!</h1> : (players.length >= 2 ?
        (<h1>jogadores {players.join(' e ')} ganharam</h1>)
      : (<h1>jogador {players[0]} ganhou!</h1>)
      )}
      <AgainButton onClick={onAgain}>de novo</AgainButton>
      <ResetButton onClick={onReset}>zerar</ResetButton>
    </>
  )
}

export default Result;
