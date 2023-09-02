import { Header, Main } from '@/components';
import { t } from '@/utils/i18n';

export default function Home() {
  return (
    <Main>
      <Header />
      <div className='flex items-center justify-center mt-20 w-3/4 md:w-3/5 sm:w-5/6'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div className='text-2xl font-bold text-slate-300'>
            {t('obj_to_interface_generator_page_title')}
          </div>
        </div>
      </div>
    </Main>
  );
}
