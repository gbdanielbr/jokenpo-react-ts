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
  background-color: rgb(166, 198, 192);
  border-radius: 1rem;
  height: 25rem;
  width: 15rem;
  padding: 3rem;
  justify-content: space-around;
`

export const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export const ResetButton = styled.button`
  padding: 0.6rem;
`
