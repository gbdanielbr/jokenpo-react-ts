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

  for (let i = 1; i <= numberOfPlayers; i++){
    let isWinner = rules[playerChoice[i-1]]
    
    for (let y = 1; y <= numberOfPlayers; y++){
      if (isWinner.includes(playerChoice[y-1])){
        winnersArray[i] = 1
        continue
      }
    }

    // if (winnersArray[i] != undefined) {
    //   winners[i] = `${i+1}`
    //   continue
    // }
  }

  return winnersArray
}
