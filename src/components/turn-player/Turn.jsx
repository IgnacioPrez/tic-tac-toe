import { TURNS } from "../../utilities/gameData.utils"
import { ContainerTurn, TurnBtn } from "../components-with-styled"

const Turn = ({turn,selected}) => {
  return (
    <ContainerTurn selected={selected}>
        <TurnBtn>{TURNS.x}</TurnBtn>
        <TurnBtn>{TURNS.o}</TurnBtn>
    </ContainerTurn>
  )
}

export default Turn