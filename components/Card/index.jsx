import { useState, useEffect } from "react";
import * as S from '../../styles/styles.card'
import axios from "axios";

export default function Card({ data }) {
    const [poke, setPoke] = useState()

    const InfoAllPoke = (url) => {
        useEffect(() => {
            axios
                .get(url)
                .then((response) => {
                    setPoke(response.data);

                })
        }, []);
        return poke
    }

    const call = InfoAllPoke(data)

    const typePower = (Background) => {
        switch (Background) {
            case 'fire': return '#940005';
            case 'water': return '#00b3ff';
            case 'grass': return '#56ab01';
            case 'bug': return '#256a21';
            case 'dragon': return '#753b3b';
            case 'electric': return '#ffdd00';
            case 'dark': return '#000000';
            case 'flying': return '#9dbecb';
            case 'normal': return '#c0517a';
            case 'fighting': return '#8bdee8';
            case 'rock': return '#474747';
            case 'ice': return '#6b6868';
            case 'steel': return '#474747';
            case 'poison': return '#64047f';
            case 'ghost': return '#320032';
            case 'psychic': return '#84820e';
            case 'ground': return '#9f6411';
            case 'fairy': return '#c0517a'
            default: '#98bbb7'
        }
    };
    return (
        <>
            <S.Card cor={typePower(call && call?.types && call?.types[0]?.type?.name)} >
                <S.Name>{call?.name}</S.Name>
                <S.WidImg>
                <S.Image src={call?.sprites.other.dream_world.front_default} />
                </S.WidImg>
            </S.Card>

        </>

    )

}