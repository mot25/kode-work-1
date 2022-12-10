import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.75 3a2.75 2.75 0 0 1 2.75 2.75v12a2.75 2.75 0 0 1-2.75 2.75h-13a.75.75 0 0 1-.564-.256l-7-8a.75.75 0 0 1 0-.988l7-8A.75.75 0 0 1 7.75 3h13ZM8.09 4.5l-6.343 7.25L8.09 19h12.66c.69 0 1.25-.56 1.25-1.25v-12c0-.69-.56-1.25-1.25-1.25H8.09Zm7.72 7.25 2.47 2.47a.75.75 0 1 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 1 1 1.06 1.06l-2.47 2.47Z"
            fill="#fff"
        />
    </Svg>
)

export default SvgComponent
