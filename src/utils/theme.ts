'use client'

import { PaletteColorOptions, createTheme } from "@mui/material"
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

declare module '@mui/material/styles' {
    interface Palette {
        primaryInvert: string
    }
    interface PaletteOptions {
        primaryInvert: PaletteColorOptions
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        primaryInvert: true
    }
}

declare module "@mui/material/Input" {
    interface InputPropsColorOverrides {
        primaryInvert: true
    }
}

export default createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#289672',
            contrastText: '#eeeeee'
        },
        primaryInvert: {
            main: '#eeeeee',
            contrastText: '#289672'
        },
        secondary: {
            main: '#FEB72B',
        },
        background: {
            default: '#f8f8f8',
        },
    },
    typography: {
        fontFamily: openSans.style.fontFamily
    }
})
