import styled from 'styled-components'

export const AgainButton = styled.button`
  width: 8rem;
  height: 3.2rem;
  font-size: 130%;
  color: white;
  background: #345B63;
  border-radius: 0.3rem;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.36);
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
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.36);
  transition: 0.3s;
  &:hover {
    background-color: lightcyan;
    cursor: pointer;
  }
`