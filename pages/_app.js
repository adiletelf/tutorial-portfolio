import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main';
import Theme from '../components/theme'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={Theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    );
};

export default Website;