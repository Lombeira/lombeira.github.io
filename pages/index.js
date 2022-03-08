import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/List';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lombeira</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header></Header>
      </header>

      <main>
        <List></List>
      </main>

      <Footer />
    </div>
  );
}
