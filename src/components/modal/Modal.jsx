import { ContentDiv, ModalBtn, ModalDiv } from '../components-with-styled'

export const Modal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv block={show ? 'block' : 'none'}>
      <ContentDiv>
        {children}
        <ModalBtn onClick={handleClose}>Salir</ModalBtn>
      </ContentDiv>
    </ModalDiv>
  )
}
