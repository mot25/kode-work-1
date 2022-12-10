import { darkTheme } from '@shared/ui/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={80} height={100} fill="none" >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0h46c.09 0 .18.006.268.018a1.5 1.5 0 0 1 1.399.54l21 26c.277.342.378.77.315 1.173.012.088.018.178.018.269v63c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10C0 4.477 4.477 0 10 0Zm64.36 26L58 5.744V25a1 1 0 0 0 1 1h15.36ZM59 29a4 4 0 0 1-4-4V3H10a7 7 0 0 0-7 7v81a7 7 0 0 0 7 7h59a7 7 0 0 0 7-7V29H59Z"
            fill={darkTheme.palette.indicator.success}
        />
        <Path
            d="M19.826 36.56a1.5 1.5 0 0 1 2.12-2.12l4.44 4.439 4.44-4.44a1.5 1.5 0 0 1 2.12 2.122L28.509 41l4.439 4.44a1.5 1.5 0 0 1-2.122 2.12l-4.439-4.439-4.44 4.44a1.5 1.5 0 0 1-2.12-2.122L24.265 41l-4.44-4.44Z"
            fill={darkTheme.palette.indicator.error}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.645 64.443a1.5 1.5 0 0 0-1.003-1.869A96.001 96.001 0 0 0 39.886 58.5a96.038 96.038 0 0 0-27.82 4.093 1.5 1.5 0 0 0 .868 2.872A93.034 93.034 0 0 1 39.886 61.5c1.002 0 2.002.016 3 .047V71a8.5 8.5 0 1 0 17 0v-7.345a92.305 92.305 0 0 1 6.89 1.791 1.5 1.5 0 0 0 1.87-1.003ZM45.886 61.69a93.65 93.65 0 0 1 4 .341V70.5a1.5 1.5 0 1 0 3 0v-8.099c1.34.188 2.673.404 4 .649V71a5.5 5.5 0 0 1-11 0v-9.31Z"
            fill={darkTheme.palette.indicator.error}
        />
        <Path
            d="M46.825 34.44a1.5 1.5 0 0 0 0 2.12l4.44 4.44-4.44 4.44a1.5 1.5 0 0 0 2.122 2.12l4.44-4.439 4.438 4.44a1.5 1.5 0 0 0 2.122-2.122L55.507 41l4.44-4.44a1.5 1.5 0 0 0-2.122-2.12l-4.439 4.439-4.44-4.44a1.5 1.5 0 0 0-2.12 0Z"
            fill={darkTheme.palette.indicator.error}
        />
    </Svg>
)

export default SvgComponent
