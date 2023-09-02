import { useRouter } from 'next/router';
import enTranslations from '../../public/locales/en.json';
import ptTranslations from '../../public/locales/pt.json';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations = {
  en: enTranslations,
  pt: ptTranslations,
};

export function t(key: string) {
  const { locale } = useRouter();
  if (locale) {
    const translation = (translations as Translations)[locale][key];
    if (translation) {
      return translation;
    }
  }
  return key;
}
