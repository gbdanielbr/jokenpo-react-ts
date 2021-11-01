import { AgainButton, ResetButton } from "./styles"

interface Props {
  onAgain: () => void;
  onReset: () => void;
  winners: number[];
  numberOfPlayers: number;
}

const Result: React.FC<Props> = ({ winners, onAgain, onReset, numberOfPlayers }) => {

  return(
    <>
      <h2>Resultado</h2>
      {winners.length == 0 || winners.length == numberOfPlayers ? 
      <h1>empate!</h1> : (winners.length >= 2 ?
        (<h1>jogadores {winners.join(' e ')} ganharam</h1>)
      : (<h1>jogador {winners[0]} ganhou!</h1>)
      )}
      <AgainButton onClick={onAgain}>de novo</AgainButton>
      <ResetButton onClick={onReset}>zerar</ResetButton>
    </>
  )
}

export default Result;
