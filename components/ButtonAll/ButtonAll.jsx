import * as S from '../../styles/styles.buttonall'

export const ButtonAll = ({ action, icon, text }) => {

    return (
        <S.Container>
            <S.ButtonText>
                <S.ButtonAction
                    onClick={action}>
                    <S.Icon>{icon && icon}</S.Icon>
                    {text}
                </S.ButtonAction>
            </S.ButtonText>
        </S.Container>
    )
}