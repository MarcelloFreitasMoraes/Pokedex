import React from 'react'
import * as S from './styles'

export default function Modal({ nome, tipo, hp, ataque, defesa, ataqueEspecial, defesaEspecial, velocidade, imagem, setOpenModal = { setOpenModal } }) {
    console.log(nome);
    return (
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
                <S.Pergunta>
                    <S.Quem>Quem<br /> é esse<br /> pokemon</S.Quem>
                    <S.Interrogacao>?</S.Interrogacao>
                </S.Pergunta>
            )}
            <S.Botao>
                <S.X onClick={() => setOpenModal(false)}>X</S.X>
            </S.Botao>
        </S.Container >
    )
}