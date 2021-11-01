export type GameHands = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock'

const rules = { 
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Spock: ['Rock', 'Scissors'],
  Lizard: ['Spock', 'Paper']
}

export const getWinningPlayers = (numberOfPlayers: number, playerChoice: GameHands[]):number[] => {

  const winnersArray:number[] = []
  
  loop1:
  for (let i = 1; i <= numberOfPlayers; i++){
    let isWinner = rules[playerChoice[i-1]]

    for(let y = 1; y <= numberOfPlayers; y++){
      if (isWinner.includes(playerChoice[y-1])){
        winnersArray.push(i)
        continue loop1
      }
    }
  }
  return winnersArray
}
