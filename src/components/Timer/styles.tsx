import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem 5rem;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  align-items: center;
  flex-flow: column;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  background-color: #F1F1F1;
  box-shadow: 0px 6px 5px 0px #6969691f;
  position: relative;
  gap: 3rem;
 `
export const Second = styled.h1`
  font-size: 10rem;
  line-height: 0.7;
  font-weight: 400;    
  margin: 0;
  color:#38393D;
`
export const ConfigButtonInteract = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  display: flex;
  gap: 3rem;
`
export const Button = styled.button`
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  border: none;
  margin: 0.25rem;
  background-color:#489FB5;
  box-shadow: 0px 4px 2px 0px #6969691f;
  color: white;
  padding: 8px 0;
  width: 152px;
  :hover {
    cursor: pointer; 
    background-color:  #52adc4;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #489fb588;
  }
`
export const Divider = styled.div`
  min-height: 1px;
  width: 100%;
  background-color: #E4E4E4;
`