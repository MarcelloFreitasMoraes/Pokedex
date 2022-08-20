import React from 'react'
import * as S from '../../styles/styles.modal'
import { Container } from '../../container'

export default function Modal({ nome, tipo, hp, ataque, defesa, ataqueEspecial, defesaEspecial, velocidade, imagem, setOpenModal = { setOpenModal } }) {
    return (
        <Container>
        <S.Container >
            {nome &&
                <S.Typography >
                    <p>Nome:{nome}</p>
                    <p>Tipo:{tipo}</p>
                    <p>HP:{hp}</p>
                    <p>Ataque:{ataque}</p>
                    <p>Defesa:{defesa}</p>
                    <p>Ataque-Especial:{ataqueEspecial}</p>
                    <p>Defesa-Especial:{defesaEspecial}</p>
                    <p>Velocidade:{velocidade}</p>
                </S.Typography>
            }
            {imagem ? (
                <div>
                    <S.Image src={imagem}></S.Image>
                </div>
            ) : (
                <S.Question>
                    <S.who>Quem<br /> é esse<br /> pokemon</S.who>
                    <S.interrogation>?</S.interrogation>
                </S.Question>
            )}
            <S.Bot>
                <S.Modality onClick={() => setOpenModal(false)}>X</S.Modality>
            </S.Bot>
        </S.Container >
        </Container>
    )
}