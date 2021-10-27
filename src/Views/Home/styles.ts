import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(#d4ecdd, #93b5c6);
  height: 28rem;
  width: 15rem;
  padding: 3rem;
  justify-content: space-around;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.36);
  text-shadow: 1px -2px 2px #ffffff;
`

export const Header = styled.div`
  position: absolute;
  margin-top: -25rem;
`

export const Player = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-top: -22rem;
  color: black;
  h1 {
    margin-top: 1rem;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    zoom: 110%;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const ResetButton = styled.button`
  padding: 0.6rem;
  color: darkblue;
  font-weight: bold;
  background-color: transparent;
  border-radius: 0.6rem;
  /* -webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.36); */
  /* box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.36); */
  &:hover {
    zoom: 110%;
    cursor: pointer;
  }
`

export const Placar = styled.div`
  margin-top: 24rem;
  position: absolute;
  align-items: center;
  justify-content: center;
`
