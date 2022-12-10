import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.187 3.48a.5.5 0 0 0-.707.707l3.73 3.73-3.73 3.732a.5.5 0 1 0 .707.707l3.73-3.731 3.731 3.73a.5.5 0 1 0 .707-.706l-3.73-3.731 3.73-3.73a.5.5 0 1 0-.707-.708l-3.73 3.73-3.731-3.73Z"
            fill="#fff"
        />
    </Svg>
)

export default SvgComponent
