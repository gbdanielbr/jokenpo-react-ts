import React, { useEffect } from 'react';
import { AgainButton, ResetButton } from "./styles"

interface Props {
  player: number;
  onAgain: () => void;
  onReset: () => void;
}

const Result: React.FC<Props> = ({player, onAgain, onReset}) => {
  return (
    <>
      <h3>Resultado</h3>
      <h1>{player > 0 ? `jogador ${player} ganhou!`: `empate!`}</h1>
        <AgainButton onClick={onAgain}>de novo</AgainButton>
        <ResetButton onClick={onReset}>zerar</ResetButton>
    </>
  )
}

export default Result;

