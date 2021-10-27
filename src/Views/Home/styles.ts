import styled from 'styled-components'
interface Props {
  player: number;
}

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

export const HandContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;

`

export const Hand = styled.div<Props>`
  width: 100%;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: ${props => props.player == 1 ? 'start':'end'};
  img{
    width: 8rem;
  }

  &:hover {
    animation-timing-function: linear;
    animation: spin 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-iteration-count: infinite;
    transform: rotate(5deg);
    backface-visibility: hidden;
    perspective: 1000px;
    transform-origin: ${props => props.player == 1 ? 'left':'right'} 60%;
  }

  @keyframes spin {
    0% {transform: rotate(0);}
    15% {transform: rotate(5deg);}
    30% {transform: rotate(-5deg);}
    45% {transform: rotate(4deg);}
    60% {transform: rotate(-4deg);}
    75% {transform: rotate(2deg);}
    85% {transform: rotate(-2deg);}
    92% {transform: rotate(1deg);}
    100% {transform: rotate(0);}
  }
`

export const Score = styled.div`
  margin-top: 23rem;
  position: absolute;
  align-items: center;
  justify-content: center;
`