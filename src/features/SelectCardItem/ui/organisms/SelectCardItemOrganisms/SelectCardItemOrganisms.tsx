import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import { HeaderTitleForBlock } from '@shared/ui/HeaderTitleForBlock';

import { useMemo } from 'react';
import styled from 'styled-components/native';

import { IconTypeCardMC } from '../../../../../../assets/icons/IconTypeCardMC';
import LeftSelectCardItem from '../../molecules/LeftSelectCardItem';
import RightSelectCardItem from '../../molecules/RightSelectCardItem';


export type TTypeCard = 'MASTERCARD'

type Props = {
    title: string;
    balance: number;
    fourNumberCard: number;
    typeCard: TTypeCard
    onPress?: () => void;
}

const Root = styled.View`
    padding: 16px;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.palette.background.secondary};

`
const Wrapper = styled(CTouchableOpacity)`
    flex-direction: row;
    align-items: center;
`
const SelectCardItem = ({
    balance,
    fourNumberCard,
    title,
    typeCard,
    onPress
}: Props) => {
    const typeCardIcon = useMemo(() => {
        switch (typeCard) {
            case 'MASTERCARD':
                return <IconTypeCardMC />;

            default:
                return <IconTypeCardMC />;
        }
    }, [typeCard])

    return (
        <Root
        >
            <HeaderTitleForBlock
                text='Карта для оплаты'
            />
            <Wrapper
                onPress={onPress}
            >
                <LeftSelectCardItem
                    fourNumberCard={fourNumberCard}
                    typeCardIcon={typeCardIcon}
                />
                <RightSelectCardItem
                    balance={balance}
                    title={title}
                />

            </Wrapper>
        </Root >
    )
}

export default SelectCardItem