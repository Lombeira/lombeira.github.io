import { Inter } from 'next/font/google';
import { Header, Main } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Main>
      <Header />
      Home
    </Main>
  );
}
