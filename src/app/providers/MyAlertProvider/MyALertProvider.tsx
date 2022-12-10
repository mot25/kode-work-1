import { $arrAlert, addSnack } from '@app/providers/MyAlertProvider/model/state';
import { IS_IPHONE_X } from '@shared/lib/constant';
import { useStore } from 'effector-react';
import { ItemAlert } from 'features /MyALertProvider/ui/molecules/ItemAlert';
import produce from 'immer';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import styled from 'styled-components/native';


type Props = PropsWithChildren & {}
const Root = styled.View`
flex: 1;
position: relative;
    
`
// IS_IPHONE_X

const Wrapper = styled.View`
position: absolute;
top:${IS_IPHONE_X ? '40px' : '15px'};
z-index: 999;
left: 8px;
`
const MyALertProvider = ({ children }: Props) => {
    const arrAlert = useStore($arrAlert)
    return (
        <Root>
            <Wrapper
            >
                {
                    !!arrAlert[0] &&
                    <>
                        <ItemAlert
                            text={arrAlert[0].text}
                            colorType={arrAlert[0].colorType}
                            id={arrAlert[0].id}
                        />
                    </>
                }
            </Wrapper>
            {children}
        </Root>
    )
}

export default MyALertProvider