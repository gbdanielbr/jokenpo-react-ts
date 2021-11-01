export type GameHands = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock'

interface props{
  player:number;
  numberOfPlayers:number;
  playerChoice:GameHands[];
}

const rules = { 
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Spock: ['Rock', 'Scissors'],
  Lizard: ['Spock', 'Paper']
}

export const getWinningPlayer = ({player, numberOfPlayers, playerChoice}:props) => {

  const winner:number[] = [];

  for (let i = 1; i <= numberOfPlayers; i++){
    const isWinner = rules[playerChoice[i]]
    
    for (let y = 1; i <= numberOfPlayers; y++){
      if (isWinner.includes(playerChoice[y])){
        winner[i] = winner[i]+1;
        return winner[i];
      }
    }

  }

}