import React, { useEffect, useState } from "react";
import * as S from "../styles/Styles";
import axios from "axios";

export default function Home() {
  const [resposta, setResposta] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      )
      .then(function (response) {
        setResposta(response?.data);
      });
  }, []);


   return (
    <>
      <div>
        <img src='https://benoliel.vteximg.com.br/arquivos/ids/156251/banner%20moda%20masculina.png?v=637440114094000000' alt=""/>
      </div>
      <Container>
      <div>
        {resposta &&
          Object.values(resposta).map((item) => {
            return (
              <>
                <div>
                    <div>
                      <img src={item.img} />
                    </div>
                    <p>{item.roupa}</p>
                    <p>{item.valor}</p>
                    <p>{item.categoria}</p>
                </div>
              </>
            );
          })}
      </div>
      </Container>
    </>
  );
}
