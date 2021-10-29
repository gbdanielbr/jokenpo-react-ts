import React, { useEffect } from 'react';
import { AgainButton, ResetButton } from "./styles"

interface Props {
  player: number;
  setPlayer: ((player:number)=>void);
  setPlayerChoice: ((choice:string[])=>void);
  setScore: ((score:number[])=>void);
  score: number[];
}

const Result: React.FC<Props> = ({player, setPlayer, setPlayerChoice, setScore, score}) => {

  useEffect(() => {
    if(player === 1){
      setScore([score[0]+1, score[1]])
    } 
    if(player === 2){
      setScore([score[0], score[1]+1])
    } 
  },[])

  return (
    <>
      <h3>Resultado</h3>
      <h1>{player > 0 ? `jogador ${player} ganhou!`: `empate!`}</h1>
        <AgainButton onClick={() => {
          setPlayer(1);
          setPlayerChoice([]);
        }}>de novo</AgainButton>
        
        <ResetButton onClick={() => {
          setScore([0, 0])
          setPlayer(1)
          setPlayerChoice([])
        }}>zerar</ResetButton>
    </>
  )
}

export default Result;

