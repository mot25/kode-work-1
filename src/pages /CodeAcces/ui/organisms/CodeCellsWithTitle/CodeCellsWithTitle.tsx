import { Typography } from '@shared/ui/core/Typography';
import { useStore } from 'effector-react';
import { $optCodeInput } from 'pages /CodeAcces/model/stateCodeAcces';
import { CodeCells } from 'pages /CodeAcces/ui/molecules/CodeCells';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
    error: boolean,
    attemptsLeft?: number,
}
const Root = styled.View`
    margin-bottom: 50px;
    margin-top: 25px;
`
const Top = styled.View`
    margin-bottom: 24px;
`
const Title = styled(Typography)`
    text-align: center;
`

const Attempts = styled(Typography) <{ isShow: boolean }>`
    text-align: center;
    color: ${({ theme, isShow }) => isShow ? theme.palette.indicator.error : theme.palette.helpers.transparent};
    margin-top: 8px;
    margin-bottom: 30px;
`
const CodeCellsWithTitle = ({
    error,
    attemptsLeft
}: Props) => {
    const optCode: string[] = useStore($optCodeInput).split('')

    return (
        <Root>
            <Top>
                <Title
                    variant='body15Regular'
                >
                    На ваш номер отправлено
                </Title>
                <Title
                    variant='body15Regular'
                >
                    SMS с кодом подтверждения. (1234)
                </Title>
            </Top>
            <CodeCells
                optCode={optCode}
                error={error}
            />
            <Attempts
                isShow={error}
                variant='caption2'
            >
                {`Неверный код. Осталось ${attemptsLeft} попытки`}
            </Attempts>
        </Root>

    )
}

export default CodeCellsWithTitle