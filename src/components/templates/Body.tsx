import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { Shadows } from '@material-ui/core/styles/shadows';

import * as React from 'react'
import { primary } from '../../globals/colors';


const theme = createMuiTheme({
    palette: {
        primary: { main: primary, contrastText:'#FAFAFD' },
        secondary: { main: '#A0A0C7' }
    },
    typography:{
        fontFamily:"Plus Jakarta Display, sans-serif"
    },
    shadows: Array(25).fill('none') as Shadows
});


export const Body: React.FC = ({children}) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    )
}
