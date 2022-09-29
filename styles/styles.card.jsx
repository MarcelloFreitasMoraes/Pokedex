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
  background-color: rgb(54, 54, 54);
`;

export const Image = styled.img`
  background: linear-gradient( to bottom, rgba(214, 214, 214, 0.3), rgba(77, 77, 77, 0.1) );
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px 10px rgb(202 201 201 / 5%);
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;
