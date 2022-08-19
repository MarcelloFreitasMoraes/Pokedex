import styled from "styled-components";

export const Content = styled.div`
padding: 0 2rem;
background-size: 100%;
background-repeat: no-repeat;

`
export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Image = styled.img`

`

  export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  `

export const Input = styled.input`
  width: 500px;
  height: 50px;
  margin: 50px;
  padding-left: 20px;
  border-bottom: 1px solid #257fa4;
  border-top: 1px solid #deedf2;
  border-left: 1px solid #deedf2;
  border-right: 1px solid #deedf2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #ffffff;
  :focus-visible {
    outline-color: rgba(37, 127, 164, 1);
    z-index: 1;
  }    
`
export const Poster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `