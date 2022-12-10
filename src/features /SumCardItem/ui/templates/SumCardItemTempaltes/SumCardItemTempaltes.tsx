import { getProcent } from '@shared/lib/helpers';
import { HeaderTitleForBlock } from '@shared/ui/HeaderTitleForBlock';
import { ProcentAtom } from 'features /SumCardItem/ui/atom/ProcentAtom';
import { SumCardItemInputWrapper } from 'features /SumCardItem/ui/molecules/SumCardItemInputWrapper';
import { ChipsOrganisms } from 'features /SumCardItem/ui/organisms/ChipsOrganisms';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';



type Props = {
    value: string
    onChange: (value: string) => void
    error: boolean
}


const Line = styled.View <{ error: boolean }>`
width: 100%;
height: 1px;
margin-top: 14px;
margin-bottom: 8px;
background-color: ${({ theme, error }) => error ? theme.palette.indicator.error : theme.palette.indicator.success};
`


const Root = styled.View`
padding: 16px;
margin-bottom: 31px;
background-color: ${({ theme }) => theme.palette.background.secondary};
`


const chipsVariants = [100, 500, 1000, 2500, 5000, 10000, 15000, 20000]
const SumCardItemTempaltes = ({ onChange, error, value }: Props) => {    
    return (
        <Root
        >
            <HeaderTitleForBlock
                text='Сумма'
            />
            <View
            >
                <SumCardItemInputWrapper
                    onChange={onChange}
                    value={value}
                />
                <Line
                    error={error}
                />
                {
                    getProcent(10, value) > 1 ?
                        <ProcentAtom
                            value={value}
                        />
                        :
                        <ChipsOrganisms
                            chipsVariants={chipsVariants}
                            onChange={onChange}
                        />
                }
            </View>
        </Root>
    )
}

export default SumCardItemTempaltes