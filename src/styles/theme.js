import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
    // Customize your theme here
    colors: {
      brand: {
        500: '#bada55', // Customize your brand color
      },
    },
    // fonts: {
    //   heading: 'Montserrat, sans-serif', // Customize your font
    //   body: 'Roboto, sans-serif', // Customize your font
    // },
    // Add more customizations as needed
});
  
export default theme;