
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ChipsItem } from '../../atom/ChipsItem';

type Props = {
    chipsVariants: number[];
    onChange: (sum: string) => void;
}
const Seperator = styled.View`
        width: 16px;
`

const ChipsOrganisms = ({
    onChange,
    chipsVariants
}: Props) => {
    return (
        <FlatList
            data={chipsVariants}
            renderItem={({ item }) =>
                <ChipsItem
                    number={item}
                    onPress={() => onChange(item.toString())}
                />}
            ItemSeparatorComponent={() => <Seperator />}
            horizontal
            showsHorizontalScrollIndicator={false}
        />)
}

export default ChipsOrganisms