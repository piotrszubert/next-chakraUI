import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
        brand: {
            50: '#FCE8F1',
            100: '#F7BFD7',
            200: '#F297BD',
            300: '#ED6EA3',
            400: '#E84589',
            500: '#E31C6F',
            600: '#B61659',
            700: '#881143',
            800: '#5B0B2D',
            900: '#2D0616',
        },
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
});

export default theme;
