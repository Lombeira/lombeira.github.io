import Head from 'next/head';
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
      </main>
    </>
  );
}
