import React from "react";
import * as S from "../styles/styles.container";

export const Container = ({children}) => {

    return (
        <S.Main>
            {children}
        </S.Main>
    )
}