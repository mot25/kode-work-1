import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={24} fill="none" >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.75 6.25a5.75 5.75 0 0 0-11.5 0v1.23A5.501 5.501 0 0 0 0 12.5V16a5.5 5.5 0 0 0 5.5 5.5h7A5.5 5.5 0 0 0 18 16v-3.5a5.501 5.501 0 0 0-3.25-5.02V6.25ZM12.5 7c.254 0 .505.017.75.05v-.8a4.25 4.25 0 0 0-8.5 0v.8c.245-.033.496-.05.75-.05h7Zm-11 5.5a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4V16a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-3.5Z"
            fill="#6C78E6"
        />
    </Svg>
)

export default SvgComponent
