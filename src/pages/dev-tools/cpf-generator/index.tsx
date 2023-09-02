import { Header, Main } from '@/components';
import { generateCpfByState } from '@/utils/generateCpfByState';
import { t } from '@/utils/i18n';
import { StateComboBox } from '@/components/StateComboBox/StateComboBox';
import { useState } from 'react';
import { brazilStates } from '@/utils/brazilStates';
import { Toast } from '@/components/Toast/Toast';

export default function Home() {
  const [shouldUseState, setShouldUseState] = useState(false);
  const [shouldUseMask, setShouldUseMask] = useState(true);
  const [selectedState, setSelectedState] = useState(brazilStates[0]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  const timeoutModal = () => {
    openModal();
    setTimeout(() => closeModal(), 6000);
  };

  const unMaskCpf = (cpf: string) => cpf.replace(/\D/g, '');

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const handleClickGenerateCPF = () => {
    if (shouldUseState) {
      const randomCpf = generateCpfByState(selectedState.uf);
      shouldUseMask
        ? copyToClipboard(randomCpf)
        : copyToClipboard(unMaskCpf(randomCpf));
      timeoutModal();
      return;
    }
    const randomCpf = generateCpfByState();
    shouldUseMask
      ? copyToClipboard(randomCpf)
      : copyToClipboard(unMaskCpf(randomCpf));
    timeoutModal();
  };

  const handleClickCheckbox = () => setShouldUseState((prev) => !prev);
  const handleClickCheckboxMask = () => setShouldUseMask((prev) => !prev);

  return (
    <Main>
      <Header />
      <div className='flex items-center justify-center mt-20 w-3/4 md:w-3/5 sm:w-5/6'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div className='text-2xl font-bold text-primary'>
            {t('cpf_generator_page_title')}
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <input
                  checked={shouldUseMask}
                  onChange={handleClickCheckboxMask}
                  type='checkbox'
                  className='w-4 h-4'
                  aria-label='Gerar CPF por estado'
                />
                <p>{t('cpf_generator_mask_label')}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input
                  checked={shouldUseState}
                  onChange={handleClickCheckbox}
                  type='checkbox'
                  className='w-4 h-4'
                  aria-label='Gerar CPF por estado'
                />
                <p>{t('cpf_generator_checkbox_label')}</p>
              </div>
              <StateComboBox
                shouldUseState={shouldUseState}
                setSelectedState={setSelectedState}
                selectedState={selectedState}
              />
            </div>
            <button
              className='px-4 py-2 mt-4 text-primary bg-slate-300 rounded-md hover:bg-slate-400 transition-all w-full'
              onClick={handleClickGenerateCPF}
            >
              {t('cpf_generator_button_label')}
            </button>
          </div>
          <p className='md:w-4/5 sm:w-full lg:w-3/4'>
            {t('cpf_generator_disclaimer')}
          </p>
        </div>
      </div>
      <Toast
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpenModal}
      />
    </Main>
  );
}
