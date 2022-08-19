import React, { useState } from "react";
import * as S from '../styles/Styles'
import styles from '../styles/Home.module.css';
import axios from "axios"
import Modal from '../components/Modal';
import { Container } from "../container";
import { ButtonAll } from "../components/ButtonAll/ButtonAll";
import { ButtonClick } from "../components/ButtonClick/ButtonClick";

export default function Home() {
  const [resposta, setResposta] = useState("")
  const [pokemon, setPokemon] = useState("")
  const [openModal, setOpenModal] = useState(false)
  
  const pokemoLendas = (choice) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${choice}`)
      .then((response) => {
        setResposta(response.data)
        setOpenModal(true)
      })
      .catch(error => {
        alert("Quem é esse pokemon?")
      });
  }
  console.log("resposta", resposta);
  console.log(pokemon,'pokemon');
  return (
    <Container>
    <main className={styles.main}>
      <div>
        <title>Pokedex</title>
      </div>

      <S.Main >
        <S.Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' />

        {openModal && resposta &&
          <Modal
            nome={resposta?.name}
            tipo={resposta.types && resposta?.types[0]?.type?.name}
            hp={resposta.stats && resposta?.stats[0].base_stat}
            ataque={resposta.stats && resposta?.stats[1].base_stat}
            defesa={resposta.stats && resposta?.stats[2].base_stat}
            ataqueEspecial={resposta.stats && resposta?.stats[3].base_stat}
            defesaEspecial={resposta.stats && resposta?.stats[4].base_stat}
            velocidade={resposta.stats && resposta?.stats[5].base_stat}
            imagem={resposta?.sprites?.other["official-artwork"]?.front_default} alt=""
            setOpenModal={setOpenModal} />
        }

        <S.BoxButton>
          <S.Input onChange={(e) => setPokemon(e.target.value)} placeholder="Pokemon" />
          <ButtonClick 
          text={'Entre'}
          action={() => pokemoLendas(pokemon)} />
          <ButtonAll  action={() => window.location.href="/Pokemon"} text={'All Pokemons '}/>
        </S.BoxButton>
      </S.Main>
    </main >
    </Container>
  )
}