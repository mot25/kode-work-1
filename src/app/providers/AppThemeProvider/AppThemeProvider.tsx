import { darkTheme } from '@shared/ui/theme';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';


export const AppThemeProvider = ({ children }: PropsWithChildren) => {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};


export default AppThemeProvider
