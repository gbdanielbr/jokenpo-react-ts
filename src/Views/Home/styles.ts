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
  min-width: 24rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(#d4ecdd, #93b5c6);
  height: 38rem;
  width: 25rem;
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
  font-size: 120%;
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-top: -29rem;
  color: black;
  h1 {
    margin-top: 1rem;
  }
`

export const HandContainer = styled.div<props>`
  .button{
    filter: ${props => props.player === 1 ? 'hue-rotate(0deg)' : props.player === 2 ? 'hue-rotate(140deg)' : props.player === 3 ? 'hue-rotate(240deg)' :  'hue-rotate(65deg)'};
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    zoom: 53%;
    z-index: 1;
    img{
      opacity: 50%;
      transition: 0.1s;
      display: block;
      border-radius: 50%;
      border: 0.2rem solid white;
      &:hover{
        box-shadow: 0 0 2rem 0.5rem rgba(53,75,176,0.5);
        opacity: 100%;
      }
      &:active, &:focus {
        box-shadow: none;
      }
      
    }
  }
  @media (hover: none) {
    .button img:hover{
      box-shadow: none; 
      opacity: 50%;
    }
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
  width: 10rem;
  height: 4rem;
  font-size: 150;
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
  width: 8rem;
  height: 3rem;
  font-size: 130%;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 5rem;
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
  font-size: 120%;
  margin-top: 28rem;
  position: absolute;
  align-items: center;
  justify-content: center;
`
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover .dropdown-item{
    display: block;
  }

  .dropdown-item{
    font-weight: bold;
    text-shadow: none;
    text-decoration: none;
    color: white;
    background-color: #345a63;
    display: none;
    padding: 0.7rem 4rem;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.36);
    border-radius: 0.2rem;

    &:hover{
      display: block;
      background-color: #9BBEBF;
      color: black;
      border-radius: .2rem;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.36);
    }
  }
`
export const HowManyPlayersButton = styled.button`
  display: block;
  width: 10rem;
  height: 4rem;
  font-size: 150%;
  color: white;
  background-color: #345B63;
  border-radius: 0.3rem;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.36);
  margin-bottom: 16rem;
`