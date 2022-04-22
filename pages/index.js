import { Center } from '@chakra-ui/react';
import Head from 'next/head';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lombeira</title>
        <meta name="description" content="Lombeira - Frontend Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
        <Center>
          <Button>RECEBA</Button>
        </Center>
      </main>

      <Footer />
    </>
  );
}
