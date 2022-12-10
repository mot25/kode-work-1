import { darkTheme } from '@shared/ui/theme';
import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={24} fill="none">
        <Circle cx={11} cy={11} r={5.25} stroke={darkTheme.palette.content.tertiary} strokeWidth={1.5} />
        <Path
            d="m15 15 3.5 3.5"
            stroke={darkTheme.palette.content.tertiary}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
)

export default SvgComponent
