export type GameHands = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock'

const rules = { 
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Spock: ['Rock', 'Scissors'],
  Lizard: ['Spock', 'Paper']
}

export const getWinningPlayer = (player1Choice: GameHands, player2Choice: GameHands): number => {
  const player1WinningCondition = rules[player1Choice]
  if (player1WinningCondition.includes(player2Choice)) return 1
  
  const player2WinningCondition = rules[player2Choice]
  if (player2WinningCondition.includes(player1Choice)) return 2

  return 0
}