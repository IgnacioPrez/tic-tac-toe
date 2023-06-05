import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  place-items: center;
  justify-content: center;
`

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161b22;
  font-family: 'Fredoka', sans-serif;
  flex-direction: column;
  gap: 10px;
`

export const Box = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 10%;
  box-shadow: 0px 0px 8px #888888;
  width: 5rem;
  height: 5rem;
  text-align: center;
  font-size: 5em;
  font-family: 'Fredoka', sans-serif;
  font-weight: bold;
  line-height: 5rem;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 15px #888888;
  }
  color: ${({ color }) => (color === 'x' ? 'rgb(255, 70, 37)' : 'rgb(44, 135, 255)')};
`

export const TurnBtn = styled.div`
  border: none;
  border-radius: 10%;
  color: #fff;
  box-shadow: 0px 0px 2px #888888;
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 2em;
  font-family: 'Fredoka', sans-serif;
  font-weight: bold;
  line-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

`

export const ContainerTurn = styled.div`
  width: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${({ selected }) =>
    selected
      ? `
      :nth-child(1){
        background-color: rgb(44, 135, 255);
      }
      `
      : `
      :nth-child(2){
        background-color: rgb(44, 135, 255);
      }
      `}
`;

export const ResetBtn = styled.button`
  border: 1px solid #ffff;
  border-radius: 10%;
  color: #fff;
  width: 7rem;
  height: 3rem;
  text-align: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: bold;
  margin: 0.5rem;
  background-color: transparent;
  &:hover {
    background-color: #ffffff;
    color: #000;
    transition: all .3s ease;
  }
  cursor: pointer;
`

export const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`
export const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  height: auto;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: x-large;
  border-radius: 5px;
`

export const ModalBtn = styled.div`
  border: none;
  border-radius: 5px;
  color: #fff;
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-family: 'Fredoka', sans-serif;
  background-color: rgb(44, 135, 255);
  &:hover {
    background-color: #2C87DF;
    transition: all .3s ease;
  }
  cursor: pointer;
`