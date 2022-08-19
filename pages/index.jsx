import React, { useState } from "react";
import styles from '../styles/Home.module.css';
import axios from "axios"
import Modal from '../components/Modal';
import { Container } from "../container";

export default function Home() {
  const [resposta, setResposta] = useState("")
  const [pokemon, setPokemon] = useState("")
  const [openModal, setOpenModal] = useState(false)
  console.log("resposta", resposta);
  const pokemonAbilities = (choice) => {
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
  return (
    <Container>
    <div className={styles.container}>
      {/* <Head>
        <title>Pokedex</title>
      </Head> */}

      <main className={styles.main} >
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff896529894633.573b59857ec23.png' />

        {openModal &&
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

        <div>
          <input onChange={(e) => setPokemon(e.target.value)} placeholder="Pokemon" />
          {/* <button className={styles.entre} onClick={() => pokemonAbilities(pokemon)} > Entre</button>
          <button className={styles.button}><a href="/Pokemon">Todos Pokemons</a></button> */}
        </div>
      </main>
    </div >
    </Container>
  )
}