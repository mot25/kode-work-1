import { darkTheme } from '@shared/ui/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ error }: { error: boolean }) => (
    <Svg width={24} height={22} fill="none" >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 0h9a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm0 1.5A1.5 1.5 0 0 0 2 3v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 19V3a1.5 1.5 0 0 0-1.5-1.5h-9ZM8 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            fill={error ? darkTheme.palette.indicator.error : darkTheme.palette.indicator.success}
        />
    </Svg>
)

export default SvgComponent
