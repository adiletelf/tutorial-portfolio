import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Russia!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Adilet Soronov</Heading>
          <p>Web developer ( Student / Programmer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='images/takuya.jpg'
            alt='Profile Image'
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>I am a student at Tomsk State University (TSU) and a part time full-stack developer. I primarily develper using .NET and React. Also my interests include WebAssembly and Blazor.</Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='selection-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Bishkek, Kyrgyzstan.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed Bachelor&apos;s Program in Tomsk State University
        </BioSection>
      </Section>

      <Section delay="0.3">
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Cycling, Walking at night
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;