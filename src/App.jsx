import { useState } from 'react'
import { Board, Container, ResetBtn } from './components/components-with-styled'
import { Square } from './components/square'
import { Turn } from './components/turn-player'
import { TURNS } from './utilities/gameData.utils'
import { checkWinner, gameOver } from './utilities/functionsGame'
import confetti from 'canvas-confetti'
import { Modal } from './components/modal/Modal'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [isSelected, setIsSelected] = useState(false)
  const [winnerPlayer, setWinnerPlayer] = useState(null)
  const [isPopOpen, setIsPosOpen] = useState(false)

  const changeTurn = () => {
    setIsSelected(!isSelected)
  }

  const runGame = (indexElement) => {
    if (board[indexElement]) return
    const newBoard = [...board]
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    newBoard[indexElement] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    changeTurn()
    const winner = checkWinner(newBoard)
    const gameTied = gameOver(newBoard)

    if (winner) {
      confetti()
      setWinnerPlayer(winner)
      setIsPosOpen(true)
      setBoard(Array(9).fill(null))
    } else if (gameTied) {
      setWinnerPlayer(null)
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinnerPlayer(null)
  }

  return (
    <Container>
      <ResetBtn onClick={resetGame}>Resetear juego</ResetBtn>
      <Board>
        {board.map((value, index) => {
          return <Square key={index} value={value} turn={turn} update={() => runGame(index)} />
        })}
      </Board>
      <Turn turn={turn} selected={isSelected} />
      <Modal show={isPopOpen} handleClose={() => setIsPosOpen(false)}>
        <p>Gano el jugador: {winnerPlayer}!! 🥳🥳</p>
      </Modal>
    </Container>
  )
}

export default App
