import React from "react";
import * as S from "./styles";

export const Container = ({children}) => {

    return (
        <S.Main>
            {children}
        </S.Main>
    )
}