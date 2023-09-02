'use client';
import Link from 'next/link';
import { HEADER_LINKS } from './Header.data';
import { LanguageMenu } from '../LanguageMenu/LanguageMenu';
import { ThemeSwitcher } from '../ThemeSwitcher/Theme.Switcher';
import { DevToolsMenu } from '../DevToolsMenu/DevToolsMenu';
import { useRouter } from 'next/router';

type LocaleProps = 'pt' | 'en';

export const Header = () => {
  const { locale } = useRouter();

  return (
    <header className='flex items-center justify-between h-16 w-3/4 gap-8 z-50 '>
      <div className='flex items-center gap-8'>
        <Link href='/'>
          <div className='text-2xl font-bold text-primary'>Lombeira</div>
        </Link>
        <ul className='flex gap-8'>
          {locale &&
            HEADER_LINKS[locale as LocaleProps].map((link) => (
              <li key={link.label} className='text-primary'>
                <Link href={`${link.href}`}>{link.label}</Link>
              </li>
            ))}
          <DevToolsMenu />
        </ul>
      </div>
      <div className='flex items-center gap-4'>
        <LanguageMenu />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
