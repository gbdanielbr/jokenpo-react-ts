export type PlayerOptions = 'Rock' | 'Paper' | 'Scissors'

const rules = { // O objeto rules guarda a condição de vitória de para cada escolha do jogador
  Rock: ['Scissors'],
  Paper: ['Rock'],
  Scissors: ['Paper']
}

// Abaixo acontece a seguinte verificação: 
// se a escolha do segundo jogador contemplar a condição de vitória 
// da escolha do primeiro jogador, será retornado o número 1
// Já se a escolha do primeiro jogador contemplar a condição de vitória
// da escolha do segundo jogador, será retornado o número 2

const getWinningPlayer = (player1Choice: PlayerOptions, player2Choice: PlayerOptions): number => {
  const player1WinningCondition = rules[player1Choice]
  if (player1WinningCondition.includes(player2Choice)) return 1
  
  const player2WinningCondition = rules[player2Choice]
  if (player2WinningCondition.includes(player1Choice)) return 2

  return 0
}