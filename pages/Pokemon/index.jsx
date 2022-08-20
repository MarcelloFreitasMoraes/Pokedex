import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import styles from "../../styles/Home.module.css";
import * as S from "../../styles/Styles";
import { Container } from "../../container";
export default function AllPokemons() {
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => setData(response.data));
  }, []);
  const pokemonLegends = (choice) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${choice}`)
      .then((response) => {
        setResposta(response.data);
        setOpenModal(true);
      });
  };

  return (
    <Container>
      <S.Global>
        <div className={styles.modal}>
          {openModal && (
            <Modal
              nome={resposta?.name}
              tipo={resposta && resposta?.types[0]?.type?.name}
              hp={resposta && resposta?.stats[0].base_stat}
              ataque={resposta && resposta?.stats[1].base_stat}
              defesa={resposta && resposta?.stats[2].base_stat}
              ataqueEspecial={resposta && resposta?.stats[3].base_stat}
              defesaEspecial={resposta && resposta?.stats[4].base_stat}
              velocidade={resposta && resposta?.stats[5].base_stat}
              imagem={
                resposta?.sprites?.other["official-artwork"]?.front_default
              }
              alt=""
              setOpenModal={setOpenModal}
            />
          )}
        </div>
        <div className={styles.poster}>
          <a className={styles.voltar} href="/">
            voltar
          </a>
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />
          </a>
        </div>

        <div className={styles.page}>
          {data?.results?.map((item, index) => {
            return (
              <div key={index} onClick={() => pokemonLegends(item.name)}>
                <Card data={item.url} />
              </div>
            );
          })}
        </div>
      </S.Global>
    </Container>
  );
}
