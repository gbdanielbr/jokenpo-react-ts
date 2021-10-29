import styled from 'styled-components'
interface props{
  player:number;
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(#d4ecdd, #93b5c6);
  height: 36rem;
  width: 24rem;
  justify-content: space-around;
  border-radius: 1rem;
  box-shadow: 0 0 16px 6px rgba(0, 0, 0, 0.36);
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

export const HandContainer = styled.div<props>`
  .button{
    filter: ${props => props.player === 1 ? 'hue-rotate(0deg)' : 'hue-rotate(60deg)'};
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    zoom: 53%;
    z-index: 1;
    opacity: 50%;
    img{
      transition: 0.1s;
      display: block;
      border-radius: 50%;
      border: 0.2rem solid white;
    }
  }
  .button:hover{
    img {box-shadow: 0 0 2rem 0.5rem rgba(53,75,176,0.5)};
    opacity: 100%;
}  
`

export const RockButton = styled.div`
  right: 14.3%;
  bottom: 19.8%;
` 

export const PaperButton = styled.div`
  right: 3%;
  bottom: 46%;
`

export const ScissorsButton = styled.div`
  right: 35.6%;
  top: 19%;
`

export const LizardButton = styled.div`
  left: 16%;
  bottom: 19%;
`

export const SpockButton = styled.div`
right: 67%;
bottom: 45%;
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