import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Russia!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Adilet Soronov</Heading>
                    <p>Web developer ( Student / Programmer / Designer )</p>
                </Box>
            </Box>
        </Container>
    );
};

export default Page;