import { darkTheme } from '@shared/ui/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            fill="#706D76"
            d="m.47 1.53 18 18a.75.75 0 1 0 1.06-1.06l-18-18A.75.75 0 0 0 .47 1.53z"
        />
        <Path
            stroke="transparent"
            fill={darkTheme.palette.content.primary}
            d="m20.08 21.123-.707.708L-1.552.906l.708-.707zM21.296 18.835l-.707.707L-.336-1.383l.707-.707zM19.61 10.714h.065v.065h-.065z"
        />
    </Svg>
)

export default SvgComponent
