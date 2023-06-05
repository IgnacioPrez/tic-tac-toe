import { winningCombinations } from "./gameData.utils"

export const gameOver = (newBoard) => {
    return newBoard.every(el => el !== null)
  }
  
  export const checkWinner = (boardCheck) => {
    for (const WINNER of winningCombinations) {
      const [a, b, c] = WINNER
      if (boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c]) {
        return boardCheck[a]
      }
    }
  }
  