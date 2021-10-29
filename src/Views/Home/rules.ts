export type GameHands = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock'

const rules = { // O objeto rules guarda a condição de vitória de para cada escolha do jogador
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Spock: ['Rock', 'Scissors'],
  Lizard: ['Spock', 'Paper']
}

// Abaixo acontece a seguinte verificação: 
// se a escolha do segundo jogador contemplar a condição de vitória 
// da escolha do primeiro jogador, será retornado o número 1
// Já se a escolha do primeiro jogador contemplar a condição de vitória
// da escolha do segundo jogador, será retornado o número 2
export const getWinningPlayer = (player1Choice: GameHands, player2Choice: GameHands): number => {
  const player1WinningCondition = rules[player1Choice]
  if (player1WinningCondition.includes(player2Choice)) return 1
  
  const player2WinningCondition = rules[player2Choice]
  if (player2WinningCondition.includes(player1Choice)) return 2

  return 0
}