import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  display: block;
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  padding: 5px 13px 5px 25px;
  border-radius: 40px;
  border: 1px solid rgba(206, 222, 231, 1);
  background: #ffcc01;
  width: 200px;
  height: 80px;
  font-family: "Pokemon Solid", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #3560ac;
  @media only screen and (max-width: 600px) {
       width: 350px;
    height: 80px;
    border-radius: 20px;
    font-size: larger;
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #3560ac;
    background: #ffcc01;
    }
`;
export const Icon = styled.div`
  margin-right: 10px;
`;
