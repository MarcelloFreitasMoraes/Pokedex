import styled from "styled-components";

export const Container = styled.div`
width: 1345px;
margin: 0 auto;
`
export const Content = styled.section`
  position: fixed;
  background-image: url('https://cdn.icon-icons.com/icons2/851/PNG/512/Master_Ball_icon-icons.com_67545.png');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  top: 230px;
  left: 30%;
  width: 700px;
  height: 600px;
  color: black;
  align-items: center;
  justify-content: space-around;  

  @media (max-width: 600px) {
    width: 90%;
    height: 80%;
    top: 70px;
    left: 20px;
    display: flex;
    flex-direction: column-reverse;
    background-image: linear-gradient(#ff1a1a 50%, #ffffff 50%);
    border: 10px black solid;
    border-radius: 20px;
  }
`;

export const Bot = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  cursor: pointer;
`;

export const Modality = styled.p`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pokemon Solid", sans-serif;
  font-size: larger;
  color: #33363a;
  background-image: linear-gradient(#ff1a1a 50%, #ffffff 50%);
  border-radius: 50px;
  font-weight: bold;
  border: 5px #33363a solid;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: 600px) {
    width: 300px;
    height: 350px;
  }
`;
export const Question = styled.p`
  display: flex;
  flex-direction: row;
  margin-top: 100px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`;

export const who = styled.p`
  font-family: "Pokemon Solid", sans-serif;
  font-size: 70px;
  margin: 0;
  letter-spacing: 4px;
  color: #ffcc01;
  text-shadow: 10px 0 2px black;
`;

export const interrogation = styled.p`
  font-family: "Pokemon Solid", sans-serif;
  font-size: 350px;
  margin: 0;
  color: #ffcc01;
  text-shadow: 20px 0 2px black;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const Typography = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: larger;
  font-weight: bold;
  border: 2px black solid;
  border-radius: 20px;
  text-transform: capitalize;
  background-color: white;
  @media (max-width: 600px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
