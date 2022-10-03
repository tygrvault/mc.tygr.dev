import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, GlobalStyle } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    const styles = {
        global: (props: typeof GlobalStyle) => ({
            body: {
                color: "#F5F5F7",
                bg: "#000000",
            },
        }),
    };

    const fonts = {
        body: `Rubik,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        heading: `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    };

    const theme = extendTheme({
        styles,
        fonts
    });

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp;