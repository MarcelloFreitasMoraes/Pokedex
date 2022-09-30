import React, { useState } from "react";
import * as S from "../styles/Styles";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Modal from "../components/Modal";
import { ButtonAll } from "../components/ButtonAll/ButtonAll";
import { ButtonClick } from "../components/ButtonClick/ButtonClick";

export default function Home() {
  const [resposta, setResposta] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const pokemoLendas = (choice) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${choice}`)
      .then((response) => {
        setResposta(response.data);
        setOpenModal(true);
      })
      .catch((error) => {
        alert("Quem é esse pokemon?");
      });
  };  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.imglogs}>
           <img
      src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
      alt="Pokemon Logo"
      className={styles.pokemonlogo}
    />
       <img
        src="https://www.pngkey.com/png/full/144-1446994_pokeball-clipart-transparent-background-pokeball-png.png"
        alt=""
        className={styles.pokeball}
       />
       </div>
       </div>

        <S.Main>
          {openModal && resposta && (
            <Modal
              nome={resposta?.name}
              tipo={resposta.types && resposta?.types[0]?.type?.name}
              hp={resposta.stats && resposta?.stats[0].base_stat}
              ataque={resposta.stats && resposta?.stats[1].base_stat}
              defesa={resposta.stats && resposta?.stats[2].base_stat}
              ataqueEspecial={resposta.stats && resposta?.stats[3].base_stat}
              defesaEspecial={resposta.stats && resposta?.stats[4].base_stat}
              velocidade={resposta.stats && resposta?.stats[5].base_stat}
              imagem={
                resposta?.sprites?.other["official-artwork"]?.front_default
              }
              alt=""
              setOpenModal={setOpenModal}
            />
          )}

          <S.BoxButton>
            <S.Input
              onChange={(e) => setPokemon(e.target.value)}
              placeholder="Pokemon"
            />
            <ButtonClick text={"Entre"} action={() => pokemoLendas(pokemon)} />
            <ButtonAll
              action={() => (window.location.href = "/Pokemon")}
              text={"All Pokemons "}
            />
          </S.BoxButton>
        </S.Main>
      </main>
    </div>
  );
}
