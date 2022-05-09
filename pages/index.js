import * as react from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
} from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
      <react.Container>
        <react.Box borderRadius="lg" bg={react.useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a full-stack developer based in Russia!
        </react.Box>
        <react.Box display={{ md: 'flex' }}>
          <react.Box flexGrow={1}>
            <react.Heading as="h2" variant="page-title">Adilet Soronov</react.Heading>
            <p>Web developer ( Student / Programmer )</p>
          </react.Box>
          <react.Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align='center'
          >
            <react.Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='images/takuya.jpg'
              alt='Profile Image'
            />
          </react.Box>
        </react.Box>
        <Section delay={0.1}>
          <react.Heading as='h3' variant='section-title'>
            Work
          </react.Heading>
          <Paragraph>I am a student at Tomsk State University (TSU) and a part time full-stack developer. I primarily develper using .NET and React. Also my interests include WebAssembly and Blazor.</Paragraph>
          <react.Box align='center' my={4}>
            <NextLink href='/works'>
              <react.Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My portfolio
              </react.Button>
            </NextLink>
          </react.Box>
        </Section>
        <Section delay={0.2}>
          <react.Heading as='h3' variant='selection-title'>
            Bio
          </react.Heading>
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
          <react.Heading as="h3" variant="section-title">
            I ♥
          </react.Heading>
          <Paragraph>
            Art, Music, Cycling, Walking at night
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <react.Heading as='h3' variant='section-title'>
            On the web
          </react.Heading>
          <react.List>
            <react.ListItem>
              <react.Link href='https://github.com/adiletelf' target='_blank'>
                <react.Button variant='ghost' colorScheme='teal' leftIcon={<react.Icon as={IoLogoGithub} />}>
                  @adiletelf
                </react.Button>
              </react.Link>
            </react.ListItem>
            <react.ListItem>
              <react.Link href='https://instagram.com/adiletelf' target='_blank'>
                <react.Button variant='ghost' colorScheme='teal' leftIcon={<react.Icon as={IoLogoInstagram} />}>
                  @adiletelf
                </react.Button>
              </react.Link>
            </react.ListItem>
            <react.ListItem>
              <react.Link href='http://discordapp.com/users/690854717374595092' target='_blank'>
                <react.Button variant='ghost' colorScheme='teal' leftIcon={<react.Icon as={IoLogoDiscord} />}>
                  @adiletelf
                </react.Button>
              </react.Link>
            </react.ListItem>
          </react.List>
        </Section>
      </react.Container>
    </Layout>
  );
};

export default Page;