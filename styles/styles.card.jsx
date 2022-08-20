import styled from "styled-components";

export const Card = styled.div`
  margin: 20px;
  height: 350px;
  width: 200px;
  border: 5px rgb(49, 102, 177) solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.cor};
  cursor: pointer;
`;
export const Name = styled.p`
  text-transform: uppercase;
  font-size: 25px;
  font-family: "Pokemon Solid", sans-serif;
  letter-spacing: 2px;
  border-radius: 5px;
  color: #ffcc01;
  background: rgb(49, 102, 177);
`;

export const Image = styled.img`
  width: 150px;
`;
