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
  height: 36rem;
  width: 24rem;
  justify-content: space-around;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.36);
  text-shadow: 1px -2px 2px #ffffff;
`

export const Rules = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  zoom: 65%;
  opacity: 75%;
`

export const Header = styled.div`
  position: absolute;
  margin-top: -32rem;
`

export const Player = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-top: -28rem;
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
  align-items: center;
  justify-content: space-around;
`

export const Player1Hand = styled.div`
  width: 100%;
  zoom: 75%;
  padding: 0.2rem;
  margin-left: 1rem;
  opacity: 50%;
  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 1;
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
    transform-origin: left 60%;
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

export const Player2Hand = styled.div`
  width: 100%;
  zoom: 75%;
  -webkit-filter: hue-rotate(50deg);
  margin-right: 1rem;
  padding: 0.2rem;
  opacity: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 1;
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
    transform-origin: right 60%;
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

export const AgainButton = styled.button`
  width: 8rem;
  height: 3.2rem;
  font-size: 130%;
  color: white;
  background: #345B63;
  border-radius: 0.3rem;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.36);
  transition: 0.3s;
  &:hover {
    background-color: darkblue;
    font-weight: bold;
    cursor: pointer;
  }
`

export const ResetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2rem;
  font-size: 90%;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 3rem;
  color: black;
  background: transparent;
  border-radius: 0.3rem;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.36);
  transition: 0.3s;
  &:hover {
    background-color: lightcyan;
    cursor: pointer;
  }
`

export const Score = styled.div`
  margin-top: 32rem;
  position: absolute;
  align-items: center;
  justify-content: center;
`