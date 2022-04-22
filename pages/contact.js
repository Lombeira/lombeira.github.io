import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Lombeira</title>
        <meta
          name="description"
          content="Get in touch with Lombeira, Frontend Webdeveloper"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>Contato</main>

      <Footer />
    </div>
  );
}
