import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
    color?: string
}
const SvgComponent = ({ color = "#6C78E6" }: Props) => (
    <Svg width={23} height={23} fill="none" >
        <Path
            d="M1 11c0 5.523 4.477 10 10 10v0c5.523 0 10-4.477 10-10S16.523 1 11 1"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
)

export default SvgComponent
