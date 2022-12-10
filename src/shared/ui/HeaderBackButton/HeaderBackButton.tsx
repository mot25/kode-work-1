import React from 'react';
import styled from 'styled-components/native';

import { IconBackHeader } from '../../../../assets/icons/IconBackHeader';
import { CTouchableOpacity } from '../CTouchableOpacity';

type Props = {
  onPress: () => void;
}
const Root = styled(CTouchableOpacity)`
padding: 5px;
`

const HeaderBackButton = ({ onPress }: Props) => {
  return (
    <Root
      onPress={onPress}><IconBackHeader /></Root>
  )
}

export default HeaderBackButton