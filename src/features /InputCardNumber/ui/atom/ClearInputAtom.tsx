import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import React from 'react';
import styled from 'styled-components/native';

import { IconCloseInput } from '../../../../../assets/icons/IconCloseInput';

type Props = {
    clearInput: () => void
}
const TouchableOpacity = styled(CTouchableOpacity)`
        margin-right: 20px;
        padding: 7px;
        padding-right: 3px;
    
`
const ClearInputAtom = ({
    clearInput
}: Props) => {
    return (
        <TouchableOpacity
            onPress={clearInput}>
            <IconCloseInput />
        </TouchableOpacity>
    )
}

export default ClearInputAtom