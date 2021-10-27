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

export const Player = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: -3.5rem;
  color: black;
  h1 {
    margin-top: 2rem;
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  margin-bottom: -2rem;
  &:hover {
    opacity: 1;
    zoom: 150%;
  }
`

export const ResetButton = styled.button`
  padding: 0.6rem;
  color: blue;
`
